<template>
  <form class="login-form">
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
    <button @click.prevent="$emit('onLogin', { email, password })"
            :disabled="errors.any() || disabled">Login</button>
    <p class="message">Not registered?
      <a href
         @click.prevent="$emit('toggleForm', 'registration-form')">Create an account</a>
    </p>
  </form>
</template>

<script>
export default {
  props: ['disabled'],
  data() {
    return {
      email: "",
      password: ''
    }
  }
}
</script>

<style>

</style>
