<template>
  <div class="shield-item-component">
    <div>
      <div class="new-black-box rounded">
        <label>Shield/Protecetive Item</label>
      </div>
      <input type="text"
             class="common-input"
             :value="name"
             @change="$emit('onShieldUpdate', { name: $event.target.value })">
    </div>
    <div>
      <div>
        <div class="new-black-box">
          <label>AC Bonus</label>
        </div>
        <input type="number"
               class="common-input"
               :value="acBonus"
               @change="$emit('onShieldUpdate', { acBonus: $event.target.value * 1 })">
      </div>
      <div>
        <div class="new-black-box">
          <label>Weight</label>
        </div>
        <input type="number"
               class="common-input"
               :value="weight"
               @change="$emit('onShieldUpdate', { weight: $event.target.value * 1 })">
      </div>
    </div>
    <div>
      <div class="new-black-box">
        <label>Check Penalty</label>
      </div>
      <input type="number"
             class="common-input"
             :value="checkPenalty"
             @change="$emit('onShieldUpdate', { checkPenalty: $event.target.value * 1 })">
    </div>
    <div>
      <div class="new-black-box">
        <label>Spell Failure</label>
      </div>
      <input type="number"
             class="common-input"
             :value="spellFailure"
             @change="$emit('onShieldUpdate', { spellFailure: $event.target.value * 1 })">
    </div>
    <div>
      <div class="new-black-box">
        <label>Special Properties</label>
      </div>
      <input type="text"
             class="common-input"
             :value="specialProperties"
             @change="$emit('onShieldUpdate', { specialProperties: $event.target.value })">
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "name",
    "acBonus",
    "weight",
    "checkPenalty",
    "spellFailure",
    "specialProperties"
  ]
}
</script>

<style scoped>
.shield-item-component > div:nth-child(2) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.shield-item-component > div:nth-child(3),
.shield-item-component > div:nth-child(4) {
  float: left;
  width: 50%;
}

@media screen and (min-width: 1024px) {
  .rounded {
    border-radius: unset;
  }

  .shield-item-component label {
    font-size: 14px !important;
  }

  .shield-item-component {
    display: grid;
    grid-template-columns: 34% 33% 33%;
  }

  .shield-item-component > div:nth-child(3),
  .shield-item-component > div:nth-child(4) {
    float: unset;
    width: unset;
  }

  .shield-item-component > div:last-child {
    grid-column: span 2;
  }
}
</style>
