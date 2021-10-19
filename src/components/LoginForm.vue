<template>
    <form @submit.prevent="handleSubmit">
        <input type="email" v-model="email" required placeholder="email">
        <input type="password" v-model="password" required placeholder="password">
        <button>Login</button>
    </form>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup(){

        const email = ref('')
        const password = ref('')

         const handleSubmit = () => {
            console.log( email.value, password.value)
        }

        return { email, password, handleSubmit}
    }
}
</script>

<style>

</style>