<template>
  <div class="section-menu-item"
       @click="click">
    <slot>
      <span>{{section}}</span>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    section: {
      type: String,
      required: true
    }
  },
  methods: {
    click(e) {
      this.$emit('click', Object.assign(e, { section: this.section }));
    }
  }
};
</script>

<style lang="scss">
.section-menu-item {
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
