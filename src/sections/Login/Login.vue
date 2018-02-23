<template>
    <div>
        <label>
            Email:
            <input type="text" v-model="login.email">
        </label>
        <label>
            Password:
            <input type="password" v-model="login.password">
        </label>
        <button @click="doLogin()">Login</button>
        <button @click="doRegistration()">Register</button>
    </div>
</template>

<script>
import AuthService from 'Shared/services/AuthService';
import UserService from 'Services/UserService';

export default {
  data() {
    return {
      login: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    doLogin: async function () {
      var loggedIn = await AuthService.login(this.login);
      if (loggedIn) {
        if (this.$route.query.redirect) {
          this.$router.push(this.$route.query.redirect);
        } else {
          this.$router.push('home');
        }
      }
    },
    doRegistration: async function () {
      var user = await UserService.register(this.login);
      console.log(user);
    }
  }
}
</script>

<style>

</style>
