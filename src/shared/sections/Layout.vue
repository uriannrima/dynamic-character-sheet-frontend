<template>
  <div>
    <div>
      <button v-if="isAuthenticated"
              @click="doLogout">Logout</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'store/AuthModule';

export default {
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
  methods: {
    ...mapActions(['logout']),
    doLogout: async function () {
      var loggedOut = await this.logout();
      if (loggedOut) this.$router.push('/');
    }
  }
};
</script>

<style>
/* html {
  background: url("../../../static/img/background.jpg") no-repeat center
    center fixed;
  background-size: cover;
} */

.html {
  background-color: lightgray;
}

.mini-toastr-notification__message {
  white-space: pre-line;
  display: initial;
  width: initial;
  padding: initial;
}

input:focus {
  border-color: #e77600;
  box-shadow: 0 0 3px 2px rgba(228, 121, 17, 0.5);
}

button:disabled,
button [disabled] {
  background-color: #cccccc !important;
  color: #666666 !important;
  cursor: not-allowed !important;
}

.invalid {
  border: solid 1px #d00 !important;
  box-shadow: 0 0 0 3px rgba(221, 0, 0, 0.1) inset !important;
}

/* Common Classes */

.common-input {
  width: 100%;
  border: solid 1px black;
}

.total-label {
  font-weight: bolder;
  font-size: 60% !important;
}

/* Modal Form */
.form-component.editing span,
.form-component.editing label {
  display: block;
}

.form-component.editing input[type="text"],
.form-component.editing select,
.form-component.editing textarea {
  width: 100%;
}

.form-component.editing textarea {
  font-size: 12px;
  height: 100px;
}
</style>
