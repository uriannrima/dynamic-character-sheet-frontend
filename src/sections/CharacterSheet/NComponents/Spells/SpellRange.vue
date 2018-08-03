<template>
  
</template>

<script>
export default {
  props: {
    range: {
      type: [Object | string],
      default: 'Self'
    }
  },
  methods: {},
  render() {
    const isObject = typeof this.range === 'Object';
    return isObject ? this.range.type : this.range;
  }
};
</script>

<style>
</style>
