<template>
  <loading-component :loading="isLoading">
    <slot></slot>
  </loading-component>
</template>

<script>
import { mapState } from '../Store/Layout';
export default {
  computed: {
    ...mapState(['isLoading'])
  }
};
</script>
