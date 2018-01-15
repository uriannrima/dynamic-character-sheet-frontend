<template>
  <div class="bab-component">
    <div class="black-box bab-box">
      <label>Base Attack Bonus</label>
    </div>
    <input type="number" class="common-input" v-model.number="character.baseAttackBonus">
  </div>
</template>

<script>
import CharacterMixin from 'Store/character.mixin';

export default {
  mixins: [CharacterMixin]
}
</script>

<style>
.bab-component {
  display: grid;
  grid-template-columns: 70% 1fr;
  align-items: center;
  justify-items: center;
}

.bab-box {
  align-items: center;
}
</style>
