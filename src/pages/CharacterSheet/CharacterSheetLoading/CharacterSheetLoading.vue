<template>
  <loading :loading="isLoading">
    <slot></slot>
  </loading>
</template>

<script>
import { mapState } from '../Store/Layout';
export default {
  computed: {
    ...mapState(['isLoading'])
  }
};
</script>
