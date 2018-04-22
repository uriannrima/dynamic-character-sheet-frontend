<template functional>
  <div class="spell-save-component">
    <div class="black-box">
      <label>Spell Save</label>
    </div>
    <input type="number"
           class="common-input"
           readonly
           :value="10 + props.keyScoreModifier">
    <label>&nbsp;</label>
    <label class="spell-save-dc-mod">DC Mod</label>
  </div>
</template>

<style>
.spell-save-component {
  display: grid;
  grid-template-columns: 75% auto;
  grid-template-rows: 1fr auto;
  grid-column-gap: 2px;
}

.spell-save-dc-mod {
  font-weight: bolder;
  text-transform: uppercase;
  display: block;
  text-align: center;
  font-size: 75%;
}
</style>
