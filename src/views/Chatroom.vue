<template>
  <div class="container">
      <Navbar/>
      <ChatWindow/>
      <NewChatForm/>
  </div>
</template>

<script>
import { watch } from '@vue/runtime-core'
import Navbar from '../components/Navbar.vue'
import getUser from '../composables/getUser'
import { useRouter } from 'vue-router'
import NewChatForm from '../components/NewChatForm.vue'
import ChatWindow from '../components/ChatComp.vue'


export default {
    components: { Navbar, NewChatForm, ChatWindow },
    setup(){
      let { user } = getUser()
      const router = useRouter()
      // watch a value
      watch(user, () => {
        if (!user.value){
          router.push({ name: 'Welcome' })
        }
      })
    }
}
</script>

<style>

</style>