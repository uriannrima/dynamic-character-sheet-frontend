<template>
  <base-form>
    <mdc-textfield type="email"
                   label="Email"
                   required
                   autocomplete="username"
                   v-model="model.email">
    </mdc-textfield>
    <mdc-textfield type="password"
                   label="Password"
                   required
                   autocomplete="current-password"
                   v-model="model.password">
    </mdc-textfield>
    <mdc-button raised
                @click.prevent="doLogin">Login</mdc-button>
    <template slot="footer">
      <mdc-caption>Not registered? <a href
           @click.prevent="$emit('toggle-form')">Create an account</a>
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
