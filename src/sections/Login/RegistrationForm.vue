<template>
  <form class="register-form">
    <input type="text"
           name="name"
           placeholder="Account Name"
           v-model="name"
           v-validate="'required'">
    <input type="text"
           name="email"
           placeholder="E-mail"
           v-model="email"
           v-validate="'required|email'">
    <input type="password"
           name="password"
           placeholder="Password"
           v-model="password"
           v-validate="'required'">
    <button @click.prevent="$emit('onRegister', { name, email, password })"
            :disabled="errors.any() || disabled">Register</button>
    <p class="message">Already registered?
      <a href
         @click.prevent="$emit('toggleForm', 'login-form')">Sign In</a>
    </p>
  </form>
</template>

<script>
export default {
  props: ['disabled'],
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  }
}
</script>

<style>

</style>
