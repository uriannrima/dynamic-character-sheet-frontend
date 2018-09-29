<template>
  <div class="fab-menu-item"
       @click="click">
    <slot>
      <span>{{item.label}}</span>
    </slot>
  </div>
</template>

<script>
import VueTypes from 'vue-types';

export default {
  props: {
    item: VueTypes.shape({
      label: VueTypes.string.required,
      value: VueTypes.string.required
    }).required
  },
  methods: {
    click(e) {
      this.$emit('click', Object.assign(e, { meta: { item: this.item } }));
    }
  }
};
</script>

<style lang="scss">
.fab-menu-item {
  border: solid 1px black;
  border-radius: 5px;
  display: flex;
  width: 45%;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  background-color: black;
  color: white;
  height: 35px;

  span {
    text-transform: uppercase;
  }
}
</style>
