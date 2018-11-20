<template>
  <div class="login-page">
    <login-container>
      <component :is="formName"
                 @login="doLogin"
                 @register="doRegistration"
                 @toggle-form="toggleForm">
      </component>
    </login-container>
  </div>
</template>

<script>
import * as components from './components';
import { mapState, mapActions } from '@store/modules/auth';

export default {
  components: { ...components },
  data() {
    return {
      formName: 'login-form'
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
    toggleForm: function() {
      if (this.formName === 'login-form') {
        this.formName = 'register-form';
      } else {
        this.formName = 'login-form';
      }
    }
  }
};
</script>
<style scoped lang="scss">
.login-page {
  width: 100vw;
  height: 100vh;
}
</style>
<!-- style>
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
</style -->
