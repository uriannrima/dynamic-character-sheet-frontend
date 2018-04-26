<template>
  <div class="protective-item-component">
    <div>
      <div class="new-black-box rounded">
        <label>Protective Item</label>
      </div>
      <input type="text"
             class="common-input"
             :value="name"
             @change="$emit('onProtectiveItemUpdate', { name: $event.target.value })">
    </div>
    <div>
      <div>
        <div class="new-black-box">
          <label>AC Bonus</label>
        </div>
        <input type="number"
               class="common-input"
               :value="acBonus"
               @change="$emit('onProtectiveItemUpdate', { acBonus: $event.target.value * 1 })">
      </div>
      <div>
        <div class="new-black-box">
          <label>Weight</label>
        </div>
        <input type="number"
               class="common-input"
               :value="weight"
               @change="$emit('onProtectiveItemUpdate', { weight: $event.target.value * 1 })">
      </div>
    </div>
    <div>
      <div class="new-black-box">
        <label>Special Properties</label>
      </div>
      <input type="text"
             class="common-input"
             :value="specialProperties"
             @change="$emit('onProtectiveItemUpdate', { specialProperties: $event.target.value })">
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'name',
    'acBonus',
    'weight',
    'specialProperties'
  ]
}
</script>

<style scoped>
.protective-item-component > div:nth-child(2) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

@media screen and (min-width: 1024px) {
  .rounded {
    border-radius: unset;
  }

  .protective-item-component label {
    font-size: 14px !important;
  }

  .protective-item-component {
    display: grid;
    grid-template-columns: 34% 33% 33%;
  }
}
</style>
