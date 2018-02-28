<template>
  <div class="protective-item-component">
    <div>
      <div class="black-box rounded">
        <label>Protective Item</label>
      </div>
      <input type="text"
             class="common-input"
             v-model="protectiveItem.name">
    </div>
    <div>
      <div>
        <div class="black-box">
          <label>AC Bonus</label>
        </div>
        <input type="number"
               class="common-input"
               v-model.number="protectiveItem.acBonus">
      </div>
      <div>
        <div class="black-box">
          <label>Weight</label>
        </div>
        <input type="number"
               class="common-input"
               v-model.number="protectiveItem.weight">
      </div>
    </div>
    <div>
      <div class="black-box">
        <label>Special Properties</label>
      </div>
      <input type="text"
             class="common-input"
             v-model="protectiveItem.specialProperties">
    </div>
  </div>
</template>

<script>
export default {
  props: ["protectiveItem"]
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
    font-size: 9px !important;
  }

  .protective-item-component {
    display: grid;
    grid-template-columns: 34% 33% 33%;
  }
}
</style>
