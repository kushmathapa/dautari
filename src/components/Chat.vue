<template>
    <div class="container-sm mt-20">
        <div class="mx-5">
            <Message v-for="{ id, text, userPhotoURL, userName, userId } in messages" 
            :key="id" 
            :name="userName"
            :photo-url ="userPhotoURL"
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
                <input v-model="message" placeholder="Message" required />>
                <button type="submit">
                    <SendIcon />>
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import { ref, watch, nextTick } from 'vue'
import { useAuth, useChat } from '@/firebase'

import SendIcon from './SendIcon.vue'
import Message from './Message.vue'

export default {
    components: { Message, SendIcon },
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