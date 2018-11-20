<template>
  <base-form>
    <mdc-textfield type="email"
                   label="Email"
                   required
                   helptext="e-mail is required"
                   helptext-validation
                   v-model="model.email">
    </mdc-textfield>
    <mdc-textfield type="password"
                   label="Password"
                   required
                   autocomplete="new-password"
                   minlength="4"
                   helptext="password is required and must be at least 4 characters"
                   helptext-validation
                   v-model="model.password">
    </mdc-textfield>
    <mdc-textfield type="text"
                   label="Name"
                   required
                   minlength="4"
                   helptext="name is required and must be at least 4 characters"
                   helptext-validation
                   v-model="model.name">
    </mdc-textfield>
    <mdc-button raised
                @click.prevent="doRegister">Register</mdc-button>
    <template slot="footer">
      <mdc-caption>Already registered? <a href
           @click.prevent="$emit('toggle-form')">Login</a>
      </mdc-caption>
    </template>
  </base-form>
</template>

<script>
import BaseForm from './BaseForm';

export default {
  components: { BaseForm },
  data() {
    return {
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
