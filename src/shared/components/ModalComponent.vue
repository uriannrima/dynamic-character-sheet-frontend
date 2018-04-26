<template>
  <div class="modal__mask" v-show="showModal">
    <slot :actions="{ close }"></slot>
  </div>
</template>

<script>
export default {
  props: {
    showModal: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close() {
      this.$emit('update:showModal', false);
    }
  }
  /*
  Can also be done through JSX.
  render() {
    const { isOpen, open, close } = this;
    return this.$scopedSlots.default({
      isOpen: isOpen,
      actions: { open, close }
    })
  } */
}
</script>

<style scoped>
.modal__mask {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: gray;
}
</style>
