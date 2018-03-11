<template>
  <div class="saving-throw-grid">
    <div class="black-box saving-throw-box">
      <label>{{name}}</label>
      <label>({{keyScoreName}})</label>
    </div>
    <input type="number"
           class="common-input"
           readonly
           :value="getTotal">
    <input type="number"
           class="common-input"
           :value="base"
           @change="updateSavingThrow({ base : $event.target.value * 1 })">
    <input type="number"
           class="common-input"
           readonly
           :value="keyScoreModifier">
    <input type="number"
           class="common-input"
           :value="magicModifier"
           @change="updateSavingThrow({ magicModifier : $event.target.value * 1 })">
    <input type="number"
           class="common-input"
           :value="miscModifier"
           @change="updateSavingThrow({ miscModifier : $event.target.value * 1 })">
    <input type="number"
           class="common-input"
           :value="tempModifier"
           @change="updateSavingThrow({ tempModifier : $event.target.value * 1 })">
  </div>
</template>

<script>
import { mapActions } from 'store/CharacterModule';

export default {
  props: [
    'name',
    'keyScoreName',
    'base',
    'keyScoreModifier',
    'magicModifier',
    'miscModifier',
    'tempModifier'
  ],
  computed: {
    getTotal() {
      return this.base +
        this.keyScoreModifier +
        this.magicModifier +
        this.miscModifier +
        this.tempModifier;
    }
  },
  methods: {
    updateSavingThrow(savingThrow) {
      savingThrow.name = this.name;
      this.$emit('onUpdateSavingThrow', savingThrow);
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
