<template>
<nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
     <span class="font-semibold text-xl tracking-tight"><strong> Dautari </strong> Chat App </span>
  </div>
   <div>
       <div v-if="isLogin " class="login">
                <Avatar :src="user.photoURL" />
                <button  class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0" @click="signOut">
                    Sign Out
                </button>
            </div>
            <div v-else>
                <button  class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0" @click="signIn">Sign In</button>
            </div>
     </div>
  </nav>
</template>
<script>
import Image from './Image.vue'
import { useAuth } from '@/firebase'

export default{
    components: { Image },
    setup(){
        const { user, isLogin, signOut, signIn } = useAuth()
        return { user, isLogin, signOut, signIn }

    }
}
</script>