<template>
  <div>
    <v-app>
      <v-navigation-drawer v-model="drawer"
                           temporary
                           app
                           left
                           v-if="isAuthenticated">
        <v-toolbar flat>
          <v-list>
            <v-list-tile>
              <v-list-tile-title class="title">
                Sections
              </v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-toolbar>
        <v-divider></v-divider>
        <v-list dense
                class="pt-0">
          <v-list-tile v-for="section in sections"
                       :key="section.title"
                       router
                       :to="{ name: section.name }">
            <v-list-tile-action v-if="section.icon">
              <v-icon>{{ section.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ section.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider></v-divider>
          <v-list-tile @click="doLogout">
            <v-list-tile-action>
              <v-icon>power_settings_new</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Logout</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <portal-target name="right-drawer"
                     slim></portal-target>
      <v-toolbar fixed
                 app
                 clipped-left
                 clipped-right
                 v-if="isAuthenticated">
        <v-toolbar-side-icon @click.stop="toggleDrawer"></v-toolbar-side-icon>
        <v-toolbar-title>{{$route.meta.title}}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-side-icon @click.stop="$root.$emit('toggle-right-drawer')">
          <v-icon>more_vert</v-icon>
        </v-toolbar-side-icon>
      </v-toolbar>
      <v-content app>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
      <!-- <v-footer app></v-footer> -->
    </v-app>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'store/AuthModule';

export default {
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
  data() {
    return {
      drawer: false,
      sections: [
        {
          icon: 'home',
          title: 'Home',
          name: 'home'
        },
        {
          icon: 'person',
          title: 'Character',
          name: 'newCharacter'
        }
      ]
    }
  },
  methods: {
    ...mapActions(['logout']),
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    doLogout: async function () {
      var loggedOut = await this.logout();
      if (loggedOut) this.$router.push('/');
      this.toggleDrawer();
    }
  }
};
</script>

<style>
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
