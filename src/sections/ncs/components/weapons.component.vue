<template>
  <div class="weapons-component">
    <weapon-component v-for="(weapon, index) in character.weapons" :key="index" :weapon="weapon" />
  </div>
</template>

<script>
import WeaponComponent from './weapon.component';
import CharacterMixin from 'Store/character.mixin';

export default {
  mixins: [CharacterMixin],
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
  display: grid;
  align-items: center;
}

.weapons-component input {
  width: 100%;
  height: 100%;
}

.weapons-component select {
  font-size: 13px;
}
</style>
