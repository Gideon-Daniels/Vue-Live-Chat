<template>
    <form @submit.prevent="handleSubmit">
        <input type="email" v-model="email" required placeholder="email">
        <input type="password" v-model="password" required placeholder="password">
        <div class="error"> {{ error }} </div>
        <button>Login</button>
    </form>
</template>

<script>
import { ref } from 'vue'
import useLogin from '../composables/useLogin'

export default {
    setup(){
        //  refs
        const email = ref('')
        const password = ref('')

        const { error, login } = useLogin()

        const handleSubmit = async () => {
            await login(email.value, password.value)
            if (!error.value) {
                console.log('user logged in')
            }
        }

        return { email, password, handleSubmit, error}
    }
}
</script>

<style>

</style>