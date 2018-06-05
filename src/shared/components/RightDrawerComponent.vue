<template>
  <portal to="right-drawer">
    <v-navigation-drawer v-model="open"
                         temporary
                         app
                         right>
      <slot :actions="{ close }"></slot>
    </v-navigation-drawer>
  </portal>
</template>

<script>
export default {
  /* props: {
    value: {
      type: Boolean,
      default: false
    }
  }, */
  data () {
    return {
      open: false
    }
  },
  created () {
    this.$root.$on('toggle-right-drawer', this.toggleDrawer)
  },
  destroyed () {
    this.$root.$off('toggle-right-drawer')
  },
  methods: {
    toggleDrawer () {
      this.open = !this.open
    },
    close () {
      this.open = false
    }
  }
}
</script>

<style>

</style>
