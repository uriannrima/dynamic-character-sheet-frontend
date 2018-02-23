<template>
  <div class="weapons-component">
    <div class="black-box rounded h-md-up">
      <div>
        <label>Weapons</label>
        <span class="add-icon glyphicon" :class="{'glyphicon-zoom-out' : !minimize, 'glyphicon-zoom-in' : minimize}" @click="minimize = !minimize"></span>
      </div>
    </div>
    <weapon v-show="!minimize" v-for="(weapon, index) in character.weapons" :key="index" :weapon="weapon" />
  </div>
</template>

<script>
import { Weapon } from './';
import CharacterMixin from 'Store/character.mixin';

export default {
  mixins: [CharacterMixin],
  components: { Weapon },
  data() {
    return {
      minimize: false
    }
  }
}
</script>

<style>
.weapons-component {
  display: grid;
  grid-template-rows: repeat(5, auto);
  grid-template-columns: 1fr;
  grid-row-gap: 5px;
}

.weapon-component span,
.weapon-component div {
  font-size: 9px;
  text-transform: uppercase;
  font-weight: bold;
  display: grid;
  align-items: center;
}

.weapon-component input {
  width: 100%;
  height: 100%;
}

.weapon-component select {
  font-size: 13px;
}
</style>
