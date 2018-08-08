<template>
  <div></div>
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
    const isObject = typeof this.range === 'object';
    return isObject ? this.range.type : this.range;
  }
};
</script>

<style>
</style>
