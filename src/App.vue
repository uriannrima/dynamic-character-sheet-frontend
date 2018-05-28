<template>
  <div>
    <full-screen-loading :loading="false">
      <layout></layout>
    </full-screen-loading>
  </div>
</template>

<script lang="ts">
import Layout from './shared/sections/Layout.vue';
import FullScreenLoading from './shared/components/FullScreenLoadingComponent.vue';

export default {
  components: { Layout, FullScreenLoading }
}
</script>

<style>

</style>
