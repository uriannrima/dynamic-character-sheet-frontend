<template>
  <div class="list-component">
    <transition-group name="list"
                      tag="div"
                      class="list-component">
      <slot v-for="item in items"
            :item="item">
      </slot>
    </transition-group>
  </div>
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
