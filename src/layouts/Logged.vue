<template>
  <router-view></router-view>
</template>

<script>
import { mapGetters, mapActions } from '@store/modules/auth';

export default {
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
  methods: {
    ...mapActions(['logout']),
    doLogout: async function() {
      var loggedOut = await this.logout();
      if (loggedOut) this.$router.push('/');
    }
  }
};
</script>

<style>
</style>
