<template>
  <form class="register-form">
    <form-schema :schema="schema"
                 v-model="model"
                 @submit.prevent="doRegister">
      <button :disabled="disabled">Register</button>
    </form-schema>
    <p class="message">Already registered?
      <a href
         @click.prevent="$emit('toggleForm', 'login-form')">Sign In</a>
    </p>
  </form>
</template>

<script>
import schema from '@/domain/schemas/register.schema';

export default {
  props: ['disabled'],
  data() {
    return {
      schema,
      model: {
        name: '',
        email: '',
        password: ''
      }
    };
  },
  methods: {
    doRegister() {
      this.model.email = this.model.email.toLowerCase();
      this.$emit('register', this.model);
    }
  }
};
</script>

<style>
.register-form > div {
  position: relative;
}

.registration-error-icon {
  position: absolute;
  right: 5px;
  top: 17px;
  color: red;
}
</style>
