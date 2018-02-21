<template>
  <div class="spells-per-day-area">
    <spells-per-day-component></spells-per-day-component>
  </div>
</template>

<script>
import SpellsPerDayComponent from './components/spells-per-day.area/spells-per-day.component';

export default {
  components: { SpellsPerDayComponent }
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
