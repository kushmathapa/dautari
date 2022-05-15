import firebase  from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

import { ref, onUnmounted, computed } from 'vue'

firebase.initializeApp( {
    apiKey: "AIzaSyDK2VeAUTLITlv1U_wCn0eZCgWmuOStRWc",
    authDomain: "dautari-chat-app.firebaseapp.com",
    projectId: "dautari-chat-app",
    storageBucket: "dautari-chat-app.appspot.com",
    messagingSenderId: "42392796638",
    appId: "1:42392796638:web:96c4f8b352ef7f4895314f",
    measurementId: "G-LYV9300H7P"
  })

  const auth = firebase.auth()

  //listen to auth state changes, and assign the value to user reactive variable
  //also need to unsubscribe from the event when the component in unmounted
  //add computed property to check if a user is logged in or not, firebase returns null if not authenticated
  export function useAuth(){
      const user = ref(null)
      const unsubscribe = auth.onAuthStateChanged(_user => (user.value = _user))
      onUnmounted(unsubscribe)
      const isLogin = computed(() => user.value !== null)

      //create a sign in function to call to log users, we are using google authenticaiton in firebase 
      const signIn = async() => { 
        //user google authentication provider and pass to sign in function
        const googleProvider = new firebase.auth.GoogleAuthProvider()
        await auth.signInWithPopup(googleProvider)
      }

      const signOut = () => auth.signOut()
      

      return { user, isLogin, signIn, signOut}
  }

  //create hooks for cloud firestore, which has a collection named messages, we filter the recent 77 only
  const firestore = firebase.firestore()
  const messagesCollection = firestore.collection('messages')

  const messagesQuery = messagesCollection.orderBy('createdAt', 'desc').limit(77)

  //listen to the messageQuery in the following hook, assgin results to array
  export function useChat(){
      const messages = ref([])
      const unsubscribe = messagesQuery.onSnapshot(snapshot => {
          messages.value = snapshot.docs.map(
              doc => ({id: doc.id, ...doc.data() })
          ).reverse()
      })
      //close snapshot listener
      onUnmounted(unsubscribe)
      
      /*add a message to the messages collection, we need to make sure a user is logged in before 
      we create a new message and we can grab the current user and auth status by calling useAuth() function
      if a user is logged in we grab their displayname, id, photo and insert a new message to firebase storage   */
      const { user, isLogin } = useAuth()
      const sendMessage = text => {
          if(!isLogin.value) return
          const { photoURL, uid, displayName } = user.value
          messagesCollection.add({
              userName: displayName,
              userId: uid,
              userPhotoURL: photoURL,
              text: text,
              createdAt: firebase.firestore.FieldValue.serverTimestamp()
          })
      }

      return{ messages, sendMessage}

  }