<template>
  <div class="spells-per-day-area">
    <spells-per-day></spells-per-day>
  </div>
</template>

<script>
import { SpellsPerDay } from './';

export default {
  components: { SpellsPerDay }
}
</script>

<style>
.spells-per-day-header,
.single-spd-component {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 5px;
}
</style>
