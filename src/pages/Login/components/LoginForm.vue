<template>
  <form class="login-form">
    <form-schema :schema="schema"
                 v-model="model"
                 @submit.prevent="doLogin">
      <button :disabled="disabled">Login</button>
    </form-schema>
    <p class="message">Not registered?
      <a href
         @click.prevent="$emit('toggleForm', 'register-form')">Create an account</a>
    </p>
  </form>
</template>

<script>
import schema from '@/domain/schemas/login.schema';

export default {
  props: ['disabled'],
  data() {
    return {
      schema,
      model: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    doLogin($event) {
      this.model.email = this.model.email.toLowerCase();
      this.$emit('login', this.model);
    }
  }
};
</script>

<style>
</style>
