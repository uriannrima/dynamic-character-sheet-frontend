<template>
  <div>
    <loading-component :loading="false">
      <layout></layout>
    </loading-component>
  </div>
</template>

<script lang="ts">
import Layout from './shared/sections/Layout.vue'
import LoadingComponent from './shared/components/LoadingComponent.vue'

export default {
  components: { Layout, LoadingComponent }
}
</script>

<style>

</style>
