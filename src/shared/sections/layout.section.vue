<template>
    <div>
        <div>
            <button v-if="isAuthenticated()" @click="doLogout()">Logout</button>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import Home from '@/sections/home/home.section';
import Ncs from '@/sections/ncs/ncs.component';
import AuthService from 'Shared/services/AuthService';

export default {
  components: {
    'dcs-home': Home,
    'ncs': Ncs
  },
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
