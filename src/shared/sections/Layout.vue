<template>
  <div>
    <div>
      <button v-if="isAuthenticated()" @click="doLogout()">Logout</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { Home, CharacterSheet } from 'sections';
import AuthService from 'shared/services/AuthService';

export default {
  components: { Home, CharacterSheet },
  methods: {
    doLogout: async function () {
      var loggedOut = await AuthService.logout();
      if (loggedOut) this.$router.push('/');
    },
    isAuthenticated: function () {
      return AuthService.isAuthenticated();
    }
  }
}
</script>

<style>

</style>
