<template>
  <div class="armor-item-component">
    <div>
      <div class="new-black-box rounded">
        <label>Armor/Protecetive Item</label>
      </div>
      <input type="text"
             class="common-input"
             :value="name"
             @change="$emit('armorUpdate', { name: $event.target.value })">
    </div>
    <div>
      <div>
        <div class="new-black-box">
          <label>Type</label>
        </div>
        <input type="text"
               class="common-input"
               :value="type"
               @change="$emit('armorUpdate', { type: $event.target.value })">
      </div>
      <div>
        <div class="new-black-box">
          <label>AC Bonus</label>
        </div>
        <input type="number"
               class="common-input"
               :value="acBonus"
               @change="$emit('armorUpdate', { acBonus: $event.target.value * 1 })">
      </div>
      <div>
        <div class="new-black-box">
          <label>Max Dex</label>
        </div>
        <input type="number"
               class="common-input"
               :value="maxDex"
               @change="$emit('armorUpdate', { maxDex: $event.target.value * 1 })">
      </div>
    </div>
    <div>
      <div>
        <div class="new-black-box">
          <label>Check Penalty</label>
        </div>
        <input type="number"
               class="common-input"
               :value="checkPenalty"
               @change="$emit('armorUpdate', { checkPenalty: $event.target.value * 1 })">
      </div>
      <div>
        <div class="new-black-box">
          <label>Spell Failure</label>
        </div>
        <input type="number"
               class="common-input"
               :value="spellFailure"
               @change="$emit('armorUpdate', { spellFailure: $event.target.value * 1 })">
      </div>
    </div>
    <div>
      <div>
        <div class="new-black-box">
          <label>Speed</label>
        </div>
        <input type="text"
               class="common-input"
               :value="speed"
               @change="$emit('armorUpdate', { speed: $event.target.value })">
      </div>
      <div>
        <div class="new-black-box">
          <label>Weight</label>
        </div>
        <input type="number"
               class="common-input"
               :value="weight"
               @change="$emit('armorUpdate', { weight: $event.target.value * 1})">
      </div>
    </div>
    <div>
      <div class="new-black-box">
        <label>Special Properties</label>
      </div>
      <input type="text"
             class="common-input"
             :value="specialProperties"
             @change="$emit('armorUpdate', { specialProperties: $event.target.value })">
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'name',
    'type',
    'acBonus',
    'maxDex',
    'checkPenalty',
    'spellFailure',
    'speed',
    'weight',
    'specialProperties'
  ]
}
</script>

<style scoped>
.armor-item-component > div:nth-child(2) {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.armor-item-component > div:nth-child(3),
.armor-item-component > div:nth-child(4) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

@media screen and (min-width: 1024px) {
  .rounded {
    border-radius: unset;
  }

  .armor-item-component label {
    font-size: 14px !important;
  }

  .armor-item-component {
    display: grid;
    grid-template-columns: 34% 33% 33%;
  }

  .armor-item-component > div:nth-child(2) {
    grid-column-end: 2 span;
  }

  .armor-item-component > div:last-child > input {
    font-size: 75%;
    height: 24px;
  }
}
</style>
