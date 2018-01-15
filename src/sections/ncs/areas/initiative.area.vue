<template>
  <div class="armor-initiative-grid">
    <secondary-armor-component/>
    <initiative-component/>
  </div>
</template>

<script>
import { SecondaryArmorComponent, InitiativeComponent } from '../components'
export default {
  components: { SecondaryArmorComponent, InitiativeComponent }
}
</script>

<style>
.armor-initiative-grid {
  display: grid;
  grid-template-rows: auto auto;
  grid-row-gap: 2px;
}
</style>
