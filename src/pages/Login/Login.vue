<template>
  <div class="login-component">
    <div class="form-container">
      <component :is="formName"
                 :disabled="processing"
                 @toggleForm="toggleForm($event)"
                 @login="doLogin($event)"
                 @register="doRegistration($event)"></component>
    </div>
  </div>
</template>

<script>
import { LoginForm, RegisterForm } from './components';
import { mapState, mapActions } from '@store/modules/auth';

export default {
  components: { LoginForm, RegisterForm },
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
    doLogin: async function(payload) {
      var loggedIn = await this.login(payload);
      if (loggedIn) {
        if (this.$route.query.redirect) {
          this.$router.push(this.$route.query.redirect);
        } else {
          this.$router.push('home');
        }
      }
    },
    doRegistration: async function(payload) {
      await this.register(payload);
      this.toggleForm('login-form');
    },
    toggleForm: function(formName) {
      this.formName = formName;
    }
  }
};
</script>

<style>
.login-component {
  width: 100%;
  padding: 8% 0 0;
  margin: auto;
  min-height: 300px;
}

.form-container {
  position: relative;
  background: #ffffff;
  max-width: 300px;
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
