<template>
  <div class="saving-throw-grid">
    <div class="black-box saving-throw-box">
      <label>{{savingThrow.name}}</label>
      <label>({{savingThrow.keyAbility}})</label>
    </div>
    <input type="number"
           class="common-input"
           readonly
           :value="getTotal">
    <input type="number"
           class="common-input"
           v-model.number="savingThrow.base">
    <input type="number"
           class="common-input"
           readonly
           :value="keyAbility.getTempModifier()">
    <input type="number"
           class="common-input"
           v-model.number="savingThrow.magicModifier">
    <input type="number"
           class="common-input"
           v-model.number="savingThrow.miscModifier">
    <input type="number"
           class="common-input"
           v-model.number="savingThrow.tempModifier">
  </div>
</template>

<script>
export default {
  props: ['savingThrow', 'keyAbility'],
  computed: {
    getTotal() {
      return this.savingThrow.base +
        this.keyAbility.getTempModifier() +
        this.savingThrow.magicModifier +
        this.savingThrow.miscModifier +
        this.savingThrow.tempModifier;
    }
  }
}
</script>

<style>
.saving-throw-grid {
  display: grid;
  grid-template-columns: 30% repeat(6, 1fr);
  justify-items: center;
  align-items: center;
  grid-column-gap: 2px;
}

.saving-throw-header label {
  font-size: 50%;
  line-height: 8px;
  text-transform: uppercase;
  text-align: center;
}

@media screen and (min-width: 1024px) {
  .saving-throw-grid {
    grid-column-gap: 5px;
    height: 100%;
  }

  .saving-throw-grid > input {
    height: 100%;
  }
}
</style>
