<template>
  <div class="modifier">
    <div class="modifier__name">
      <input class="modifier-input"
             type="text"
             v-model="name"
             @keyup.enter="add"
             placeholder="Temporary modifier">
    </div>
    <div class="modifier__value">
      <input class="modifier-input"
             type="number"
             v-model.number="value"
             @keyup.enter="add">
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: '',
    value: 0,
    temporary: true
  }),
  methods: {
    add() {
      const { name, value, temporary } = this;
      if (name !== '' && value !== 0) {
        this.$emit('add', { name, value, temporary });
        this.name = '';
        this.value = 0;
      }
    }
  }
};
</script>

<style>
</style>
