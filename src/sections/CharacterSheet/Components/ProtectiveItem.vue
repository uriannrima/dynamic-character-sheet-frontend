<template>
  <div class="protective-item-component">
    <div>
      <div class="new-black-box rounded">
        <label>Protective Item</label>
      </div>
      <input type="text"
             class="common-input"
             :value="name"
             @change="$emit('protectiveItemUpdate', { name: $event.target.value })">
    </div>
    <div>
      <div>
        <div class="new-black-box">
          <label>AC Bonus</label>
        </div>
        <input type="number"
               class="common-input"
               :value="acBonus"
               @change="$emit('protectiveItemUpdate', { acBonus: $event.target.value * 1 })">
      </div>
      <div>
        <div class="new-black-box">
          <label>Weight</label>
        </div>
        <input type="number"
               class="common-input"
               :value="weight"
               @change="$emit('protectiveItemUpdate', { weight: $event.target.value * 1 })">
      </div>
    </div>
    <div>
      <div class="new-black-box">
        <label>Special Properties</label>
      </div>
      <input type="text"
             class="common-input"
             :value="specialProperties"
             @change="$emit('protectiveItemUpdate', { specialProperties: $event.target.value })">
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
