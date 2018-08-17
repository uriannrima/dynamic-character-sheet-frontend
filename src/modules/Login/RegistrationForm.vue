<template>
  <form class="register-form">
    <vue-form-generator :schema="formSchema"
                        :model="registration"
                        :options="{ validateAfterChanged: true }">
    </vue-form-generator>
    <button @click.prevent="register()"
            :disabled="$v.registration.$invalid || disabled">Register</button>
    <p class="message">Already registered?
      <a href
         @click.prevent="$emit('toggleForm', 'login-form')">Sign In</a>
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
            label: 'Name',
            model: 'name',
            required: true,
            min: 4,
            validator: validators.string.locale({
              fieldIsRequired: 'Name is required.',
              textTooSmall: 'Name must be at least {1} characters.'
            })
          },
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
      registration: {
        name: '',
        email: '',
        password: ''
      }
    };
  },
  validations: {
    registration: {
      name: {
        required,
        minLength: minLength(4)
      },
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
    register() {
      if (!this.$v.registration.$invalid) {
        this.registration.email = this.registration.email.toLowerCase();
        this.$emit('register', this.registration);
      }
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
