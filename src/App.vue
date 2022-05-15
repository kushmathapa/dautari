<template>
  <Nav />
  <Chat />>
</template>

<script>
import Chat from './components/Chat.vue'
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav, Chat
  }
}
</script>
