<template>
  <div class="weapons-component">
    <weapon-component v-for="n in 5" :key="n" />
  </div>
</template>

<script>
import WeaponComponent from './weapon.component';

export default {
  components: {
    WeaponComponent
  }
}
</script>

<style>
.weapons-component {
  display: grid;
  grid-template-rows: repeat(5, 1fr);
}
</style>
