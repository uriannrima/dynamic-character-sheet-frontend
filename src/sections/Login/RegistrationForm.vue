<template>
  <form class="register-form">
    <label>Account Name</label>
    <div>
      <input type="text"
             name="name"
             v-model="name"
             v-validate="'required'">
      <span class="registration-error-icon glyphicon glyphicon-exclamation-sign"
            v-show="vErrors.has('name')"
            :title="vErrors.first('name')"></span>
    </div>
    <label>E-mail</label>
    <div>
      <input type="text"
             name="email"
             v-model="email"
             v-validate="'required|email'">
      <span class="registration-error-icon glyphicon glyphicon-exclamation-sign"
            v-show="vErrors.has('email')"
            :title="vErrors.first('email')"></span>
    </div>
    <label>Password</label>
    <div>
      <input type="password"
             name="password"
             placeholder="At least 4 characters."
             v-model="password"
             v-validate="{ required: true, min: 4}">
      <span class="registration-error-icon glyphicon glyphicon-exclamation-sign"
            v-show="vErrors.has('password')"
            :title="vErrors.first('password')"></span>
    </div>
    <button @click.prevent="register()"
            :disabled="vErrors.any() || disabled">Register</button>
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
  },
  methods: {
    register() {
      this.$validator.validateAll().then(result => {
        if (result) {
          const { name, email, password } = this;
          this.$emit('onRegister', { name, email, password });
        }
      })
    }
  }
}
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
