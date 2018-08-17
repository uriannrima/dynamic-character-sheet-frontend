<template>
  <form class="login-form">
    <vue-form-generator :schema="formSchema"
                        :model="login"
                        :options="{ validateAfterChanged: true }">
    </vue-form-generator>
    <button @click.prevent="doLogin"
            :disabled="$v.login.$invalid || disabled">Login</button>
    <p class="message">Not registered?
      <a href
         @click.prevent="$emit('toggleForm', 'registration-form')">Create an account</a>
    </p>
  </form>
</template>

<script>
import { validators } from 'vue-form-generator';
import { required, email, minLength } from 'vuelidate/lib/validators';

export default {
  props: ['disabled'],
  data() {
    return {
      formSchema: {
        fields: [
          {
            type: 'input',
            inputType: 'text',
            label: 'Email',
            model: 'email',
            required: true,
            validator: validators.string.locale({
              fieldIsRequired: 'Email is required.'
            })
          },
          {
            type: 'input',
            inputType: 'password',
            label: 'Password',
            model: 'password',
            required: true,
            min: 4,
            validator: validators.string.locale({
              fieldIsRequired: 'The password is required.',
              textTooSmall: 'Password must be at least {1} characters.'
            })
          }
        ]
      },
      login: {
        email: '',
        password: ''
      }
    };
  },
  validations: {
    login: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(4)
      }
    }
  },
  methods: {
    doLogin() {
      if (!this.$v.login.$invalid) {
        this.login.email = this.login.email.toLowerCase();
        this.$emit('login', this.login);
      }
    }
  }
};
</script>

<style>
</style>
