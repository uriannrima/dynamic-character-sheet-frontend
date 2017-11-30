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
  grid-template-columns: 1fr;
  grid-row-gap: 5px;
}

.weapons-component span,
.weapons-component div {
  font-size: 9px;
  text-transform: uppercase;
  font-weight: bold;
}

.weapons-component input {
  width: 100%;
  height: 100%;
}
</style>
