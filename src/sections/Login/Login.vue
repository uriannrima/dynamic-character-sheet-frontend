<template>
  <div class="background-container">
    <div class="login-component">
      <div class="form-container">
        <component :is="formName"
                   :disabled="processing"
                   @toggleForm="toggleForm($event)"
                   @onLogin="doLogin($event)"
                   @onRegister="doRegistration($event)"></component>
      </div>
    </div>
  </div>

</template>

<script>
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import { mapState, mapActions } from 'store/AuthModule';

export default {
  components: { LoginForm, RegistrationForm },
  data() {
    return {
      formName: 'login-form',
      disableButton: false
    };
  },
  computed: {
    ...mapState(['processing'])
  },
  methods: {
    ...mapActions(['login', 'register']),
    doLogin: async function (payload) {
      var loggedIn = await this.login(payload);
      if (loggedIn) {
        if (this.$route.query.redirect) {
          this.$router.push(this.$route.query.redirect);
        } else {
          this.$router.push('home');
        }
      }
    },
    doRegistration: async function (payload) {
      await this.register(payload);
      this.toggleForm('login-form');
    },
    toggleForm: function (formName) {
      this.formName = formName;
    }
  }
}

/* 
doLogin: async function (login) {
  try {
    this.disableButton = true;
    var loggedIn = await AuthService.login(login);
    if (loggedIn) {
      if (this.$route.query.redirect) {
        this.$router.push(this.$route.query.redirect);
      } else {
        this.$router.push('home');
      }
    }
  } catch (error) {
    console.log(error);
  }
  this.disableButton = false;
},
doRegistration: async function (login) {
  try {
    this.disableButton = true;
    await UserService.register(login);
    this.toggleForm('login-form');
    this.disableButton = false;
  } catch (error) {
    this.disableButton = false;
  }
} */
</script>

<style>
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
