<template>
  <div class="bab-component">
    <div class="black-box">
      <label>Base Attack Bonus</label>
    </div>
    <input type="text"
           class="common-input bab-input"
           :value="baseAttackBonus"
           @change="updateBaseAttackBonsu($event)">
  </div>
</template>

<script>
export default {
  props: ['baseAttackBonus'],
  methods: {
    updateBaseAttackBonsu ($event) {
      const baseAttackBonus = $event.target.value.split('/').map(v => Number(v))
      this.$emit('onUpdateBaseAttackBonus', { baseAttackBonus })
    }
  }
}
</script>

<style>
.bab-component {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(30px, auto);
  grid-row-gap: 2px;
}

.bab-input {
  text-align: center;
}

@media screen and (min-width: 1024px) {
  .bab-component {
    grid-template-columns: 70% auto;
    grid-column-gap: 10px;
  }
}
</style>
