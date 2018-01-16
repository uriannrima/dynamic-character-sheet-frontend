<template>
  <div class="spell-resistance-component">
    <div class="black-box">
      <label>Spell Resistance</label>
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
  grid-template-columns: 1fr;
  grid-template-rows: minmax(30px, auto);
}
</style>
