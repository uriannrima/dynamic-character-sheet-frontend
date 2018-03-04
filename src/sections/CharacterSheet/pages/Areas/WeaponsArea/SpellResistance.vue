<template>
  <div class="spell-resistance-component">
    <div class="black-box">
      <label>Spell Resistance</label>
    </div>
    <input type="number"
           class="common-input"
           v-model.number="character.spellResistance">
  </div>
</template>

<script>
import CharacterMixin from '@Store/mixins/character.mixin';

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

@media screen and (min-width: 1024px) {
  .spell-resistance-component {
    grid-template-columns: 60% auto;
    grid-column-gap: 10px;
  }
}
</style>
