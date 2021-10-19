<template>
  <form @submit.prevent="handleSubmit">
      <input type="text"  required placeholder="name" v-model="displayName">
      <input type="email" required placeholder="email"  v-model="email">
      <input type="password" required placeholder="password" v-model="password">
      <div class="error">{{ error }}</div>
      <button>SignUp</button>
  </form>
</template>

<script>
import { ref } from 'vue'
// import { ref } from '@vue'
import useSignup from '../composables/useSignup'

export default {
    setup(){
        // invoke signup function
        const { error, signup } = useSignup()

        // reference to th template's input elements
        const displayName = ref('')
        const email = ref('')
        const password = ref('')
        // handle submit event
        const handleSubmit = async () => {
           await signup(email.value, password.value, displayName.value)
           console.log('user signed up')
        }
        // returns values and functions
        return { displayName , email, password, handleSubmit, error}
    }
}
</script>

<style>

</style>