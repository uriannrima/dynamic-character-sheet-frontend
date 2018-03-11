<template>
  <div class="background-container">
    <div class="login-component">
      <div class="form-container">
        <form class="register-form"
              v-if="form === 'registration'">
          <input type="text"
                 name="name"
                 placeholder="Account Name"
                 v-model="login.name">
          <input type="text"
                 name="email"
                 placeholder="E-mail"
                 v-model="login.email">
          <input type="password"
                 name="password"
                 placeholder="Password"
                 v-model="login.password">
          <button @click.prevent="doRegistration()">Register</button>
          <p class="message">Already registered?
            <a href
               @click.prevent="toggleForm('login')">Sign In</a>
          </p>
        </form>
        <form class="login-form"
              v-if="form === 'login'">
          <input type="text"
                 name="email"
                 placeholder="E-mail"
                 v-model="login.email">
          <input type="password"
                 name="password"
                 placeholder="Password"
                 v-model="login.password">
          <button @click.prevent="doLogin()">Login</button>
          <p class="message">Not registered?
            <a href
               @click.prevent="toggleForm('registration')">Create an account</a>
          </p>
        </form>
      </div>
    </div>
  </div>

</template>

<script>
import AuthService from 'shared/services/AuthService';
import UserService from 'services/UserService';

export default {
  data() {
    return {
      form: 'login',
      login: {
        name: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    toggleForm: function (formName) {
      this.form = formName;
    },
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
      const { email } = user;
      this.login.email = email;
      this.toggleForm('login');
    }
  }
}
</script>

<style scoped>
.login-component {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
  min-height: 300px;
  transition: all 3 linear;
}

.form-container {
  position: relative;
  background: #ffffff;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

.form-container input {
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
}

.form-container button {
  text-transform: uppercase;
  outline: 0;
  background: #9f714a;
  width: 100%;
  border: 0;
  padding: 15px;
  font-size: 14px;
  transition: all 0.3 ease;
  cursor: pointer;
  color: #ffffff;
}

.form-container button:hover,
.form-container button:active,
.form-container button:focus {
  background: #c19066;
}

.form-container .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form-container .message a {
  color: #c19066;
  text-decoration: none;
}
</style>

<style>
html {
  background: url("../../../static/images/background.jpg") no-repeat center
    center fixed;
  background-size: cover;
}
</style>
