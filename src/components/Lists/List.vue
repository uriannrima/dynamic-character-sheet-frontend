<template>
  <transition-group name="list-component"
                    tag="div"
                    class="list-component">
    <slot v-for="item in items"
          :item="item">
    </slot>
  </transition-group>
</template>

<script>
export default {
  props: {
    items: Array
  }
};
</script>

<style scoped>
</style>
