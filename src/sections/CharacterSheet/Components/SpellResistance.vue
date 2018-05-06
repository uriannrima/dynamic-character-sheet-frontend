<template>
  <div class="spell-resistance-component">
    <div class="black-box">
      <label>Spell Resistance</label>
    </div>
    <input type="number"
           class="common-input"
           :value="spellResistance"
           @change="$emit('onUpdateSpellResistance', { spellResistance: $event.target.value * 1})">
  </div>
</template>

<script>

export default {
  props: ['spellResistance']
}
</script>

<style>
.spell-resistance-component {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(30px, auto);
  grid-row-gap: 2px;
}

@media screen and (min-width: 1024px) {
  .spell-resistance-component {
    grid-template-columns: 60% auto;
    grid-column-gap: 10px;
  }
}
</style>
