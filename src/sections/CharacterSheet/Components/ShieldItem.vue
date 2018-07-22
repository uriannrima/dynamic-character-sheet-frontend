<template>
  <div class="shield-item-component">
    <div>
      <div class="new-black-box rounded">
        <label>Shield/Protecetive Item</label>
      </div>
      <input type="text"
             class="common-input"
             :value="name"
             @change="$emit('shieldUpdate', { name: $event.target.value })">
    </div>
    <div>
      <div>
        <div class="new-black-box">
          <label>AC Bonus</label>
        </div>
        <input type="number"
               class="common-input"
               :value="acBonus"
               @change="$emit('shieldUpdate', { acBonus: $event.target.value * 1 })">
      </div>
      <div>
        <div class="new-black-box">
          <label>Weight</label>
        </div>
        <input type="number"
               class="common-input"
               :value="weight"
               @change="$emit('shieldUpdate', { weight: $event.target.value * 1 })">
      </div>
    </div>
    <div>
      <div class="new-black-box">
        <label>Check Penalty</label>
      </div>
      <input type="number"
             class="common-input"
             :value="checkPenalty"
             @change="$emit('shieldUpdate', { checkPenalty: $event.target.value * 1 })">
    </div>
    <div>
      <div class="new-black-box">
        <label>Spell Failure</label>
      </div>
      <input type="number"
             class="common-input"
             :value="spellFailure"
             @change="$emit('shieldUpdate', { spellFailure: $event.target.value * 1 })">
    </div>
    <div>
      <div class="new-black-box">
        <label>Special Properties</label>
      </div>
      <input type="text"
             class="common-input"
             :value="specialProperties"
             @change="$emit('shieldUpdate', { specialProperties: $event.target.value })">
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'name',
    'acBonus',
    'weight',
    'checkPenalty',
    'spellFailure',
    'specialProperties'
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
  background-color: white;
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
