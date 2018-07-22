<template>
  <form class="login-form">
    <label>E-mail</label>
    <input type="text"
           name="email"
           v-model="email"
           v-validate="'required|email'">
    <label>Password</label>
    <input type="password"
           name="password"
           placeholder="At least 4 characters."
           v-model="password"
           v-validate="{ required: true, min: 4 }">
    <button @click.prevent="$emit('login', { email: email.toLowerCase(), password })"
            :disabled="vErrors.any() || disabled">Login</button>
    <p class="message">Not registered?
      <a href
         @click.prevent="$emit('toggleForm', 'registration-form')">Create an account</a>
    </p>
  </form>
</template>

<script>
export default {
  $_veeValidate: {
    validator: 'new'
  },
  props: ['disabled'],
  data () {
    return {
      email: '',
      password: ''
    }
  }
}
</script>

<style>

</style>
