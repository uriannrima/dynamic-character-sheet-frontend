<template>
  <div class="secondary-armor-component">
    <div class="black-box">
      <label>Touch</label>
      <label>Armor Class</label>
    </div>
    <div class="black-box ff-bb">
      <label>Flat-Footed</label>
      <label>Armor Class</label>
    </div>
    <input type="number"
           class="common-input touch-armor-input"
           readonly
           :value="getTouchArmor">
    <input type="number"
           class="common-input"
           readonly
           :value="getFlatFooted">
  </div>
</template>

<script>
import { mapGetters } from '@Store/CharacterModule';

export default {
  computed: {
    ...mapGetters(['getTouchArmor', 'getFlatFooted'])
  }
}
</script>

<style>
.secondary-armor-component {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2px;
  grid-row-gap: 2px;
}

@media screen and (min-width: 1024px) {
  .secondary-armor-component {
    grid-template-columns: 25% auto 45% auto;
    padding: 0 5px;
    grid-column-gap: 10px;
  }

  .ff-bb {
    grid-row-start: 1;
    grid-column-start: 3;
  }

  .touch-armor-input {
    grid-row-start: 1;
    grid-column-start: 2;
  }
}
</style>
