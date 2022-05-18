<template>
    <div class="container-sm mt-20">
        <div class="mx-5">
            <Message v-for="{ id, text, userPhotoURL, userName, userId } in messages" 
            :key="id" 
            :name="userName"
            :image-url ="userPhotoURL"
            :sender="userId === user?.uid"
            >
                {{text}}
            </Message>
        </div>
    </div>
    <div ref="bottom" class="mt-20"/>
    
    <div class="bottom">
        <div class="container-sm">
            <form v-if="isLogin" @submit.prevent="send" > 
                <input v-model="message" placeholder="Message" required />
                <button>
                <svg class="icon-send hover:text-green-500 hover:text-green-500 svg-icon fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                	<path d="M17.218,2.268L2.477,8.388C2.13,8.535,2.164,9.05,2.542,9.134L9.33,10.67l1.535,6.787c0.083,0.377,0.602,0.415,0.745,0.065l6.123-14.74C17.866,2.46,17.539,2.134,17.218,2.268 M3.92,8.641l11.772-4.89L9.535,9.909L3.92,8.641z M11.358,16.078l-1.268-5.613l6.157-6.157L11.358,16.078z"></path>
				</svg>	
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import { ref, watch, nextTick } from 'vue'
import { useAuth, useChat } from '@/firebase'

import Message from './Message.vue'

export default {
    components: { Message },
    setup() {
        const { user, isLogin } = useAuth()
        const { messages, sendMessage } = useChat()

        const bottom = ref(null) /* scroll into view any new messages added, when component gets mounted, the bottom ref 
        will be assigned to the above html element */

        /* add a watcher to messages, and use bottom ref to scrollintoview everytime the array changes, 
        we add deep option, to look at all nested values
        we need to wrap scrollIntoView function inside a nextTick funtion because the watch fn will be called at the same time
        that we are trying to render the messages into template.
        We need to make sure all the elements have been rendered before we scroll down to the bottom*/
        watch(
            messages,
            () =>{
                nextTick(() => {
                    bottom.value?.scrollIntoView( { behavior:  'smooth'})
                })
            },
            { deep: true }
        )

        const message = ref('')
        const send = () => {
            sendMessage(message.value)
            message.value =  ''
        }

        return { user, isLogin, messages, message, send }
    },
}
</script>