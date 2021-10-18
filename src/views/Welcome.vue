<template>
  <div class="welcome container">
      <p>Welcome</p>
      <!-- <SignupForm/> -->
      <LoginForm/>
  </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'


export default {
    components: { SignupForm, LoginForm}
}
</script>

<style>
    .welcome {
        text-align: center;
        padding: 20px 0;
    }
    /* form styles */
    .welcome form {
        width: 300px;
        margin: 20px auto;
    }
    .welcome label {
        display: block;
        margin: 20px 0 10px;
    }
</style>