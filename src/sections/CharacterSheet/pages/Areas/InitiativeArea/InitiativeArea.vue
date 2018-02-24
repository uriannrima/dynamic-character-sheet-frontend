<template>
  <div class="armor-initiative-grid">
    <secondary-armor></secondary-armor>
    <initiative></initiative>
  </div>
</template>

<script>
import { SecondaryArmor, Initiative } from './'
export default {
  components: { SecondaryArmor, Initiative }
}
</script>

<style>
.armor-initiative-grid {
  display: grid;
  grid-template-rows: auto auto;
  grid-row-gap: 2px;
}

@media screen and (min-width: 1024px) {
  .armor-initiative-grid {
    grid-template-rows: 35% auto;
  }
}
</style>
