<template>
  <div class="spell-resistance-component">
    <div class="black-box bab-box">
      <label>Spell<br>Resistance</label>
    </div>
    <input type="number" class="common-input" v-model.number="character.spellResistance">
  </div>
</template>

<script>
import CharacterMixin from 'Store/character.mixin';

export default {
  mixins: [CharacterMixin]
}
</script>

<style>
.spell-resistance-component {
  display: grid;
  grid-template-columns: 50% 1fr;
  align-items: center;
  justify-items: center;
}
</style>
