<template>
  <form @submit.prevent="handleSubmit">
      <input type="text"  required placeholder="name" v-model="displayName">
      <input type="email" required placeholder="email"  v-model="email">
      <input type="password" required placeholder="password" v-model="password">
      <button>SignUp</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup(){
        // reference to th template's input elements
        const displayName = ref('')
        const email = ref('')
        const password = ref('')
        // handle submit event
        const handleSubmit = () => {
            console.log(displayName.value, email.value, password.value)
        }
        // returns values and functions
        return { displayName , email, password, handleSubmit}
    }
}
</script>

<style>

</style>