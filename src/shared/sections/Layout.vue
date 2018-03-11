<template>
  <div>
    <div>
      <button v-if="isAuthenticated()"
              @click="doLogout()">Logout</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { Home, CharacterSheet } from "sections";
import AuthService from "shared/services/AuthService";

export default {
  components: { Home, CharacterSheet },
  methods: {
    doLogout: async function () {
      var loggedOut = await AuthService.logout();
      if (loggedOut) this.$router.push("/");
    },
    isAuthenticated: function () {
      return AuthService.isAuthenticated();
    }
  }
};
</script>

<style>
html {
  background: url("../../../static/images/background.jpg") no-repeat center
    center fixed;
  background-size: cover;
}

.mini-toastr-notification__message {
  white-space: pre-line;
  display: initial;
  width: initial;
  padding: initial;
}

button:disabled,
button [disabled] {
  background-color: #cccccc !important;
  color: #666666 !important;
  cursor: not-allowed !important;
}

.invalid {
  border-left: 3px solid !important;
  border-left-color: salmon !important;
}
</style>
