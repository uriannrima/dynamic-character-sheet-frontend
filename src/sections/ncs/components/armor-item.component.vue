<template>
  <div class="armor-item-component">
    <div>
      <div class="black-box rounded">
        <label>Armor/Protecetive Item</label>
      </div>
      <input type="text" class="common-input" v-model="armor.name">
    </div>
    <div>
      <div>
        <div class="black-box">
          <label>Type</label>
        </div>
        <input type="text" class="common-input" v-model="armor.type">
      </div>
      <div>
        <div class="black-box">
          <label>AC Bonus</label>
        </div>
        <input type="number" class="common-input" v-model.number="armor.acBonus">
      </div>
      <div>
        <div class="black-box">
          <label>Max Dex</label>
        </div>
        <input type="number" class="common-input" v-model.number="armor.maxDex">
      </div>
    </div>
    <div>
      <div>
        <div class="black-box">
          <label>Check Penalty</label>
        </div>
        <input type="number" class="common-input" v-model.number="armor.checkPenalty">
      </div>
      <div>
        <div class="black-box">
          <label>Spell Failure</label>
        </div>
        <input type="number" class="common-input" v-model.number="armor.spellFailure">
      </div>
    </div>
    <div>
      <div>
        <div class="black-box">
          <label>Speed</label>
        </div>
        <input type="text" class="common-input" v-model="armor.speed">
      </div>
      <div>
        <div class="black-box">
          <label>Weight</label>
        </div>
        <input type="text" class="common-input" v-model="armor.weight">
      </div>
    </div>
    <div>
      <div class="black-box">
        <label>Special Properties</label>
      </div>
      <input type="text" class="common-input" v-model="armor.specialProperties">
    </div>
  </div>
</template>

<script>
import CharacterMixin from 'Store/character.mixin';

export default {
  mixins: [CharacterMixin],
  props: ["armor"]
}
</script>

<style>

.armor-item-component {
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-row-gap: 2px;
}

.armor-item-component > div:nth-child(2) {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 2px;
}

.armor-item-component > div:nth-child(3),
.armor-item-component > div:nth-child(4) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2px;
}
</style>
