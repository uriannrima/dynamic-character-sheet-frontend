<template>
  <div>
    <full-screen-loading :loading="false">
      <layout></layout>
    </full-screen-loading>
  </div>
</template>

<script>
import Layout from './shared/sections/Layout';
import FullScreenLoading from './shared/components/FullScreenLoadingComponent';

export default {
  components: { Layout, FullScreenLoading }
}
</script>

<style>

</style>
