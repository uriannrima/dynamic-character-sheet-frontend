<template>
  <div class="gear-area">
    <div class="black-box rounded">
      <div>
        <label>Gear</label>
        <span class="add-icon glyphicon h-md-up" :class="{'glyphicon-zoom-out' : !minimize, 'glyphicon-zoom-in' : minimize}" @click="minimize = !minimize"></span>
      </div>
    </div>
    <armor-item v-show="!minimize" :armor="character.gear.armor"></armor-item>
    <shield-item v-show="!minimize" :shield="character.gear.shield"></shield-item>
    <protective-item v-show="!minimize" v-for="(protectiveItem, index) in character.gear.protectiveItems" :key="index" :protectiveItem="protectiveItem"></protective-item>
  </div>

</template>

<script>
import CharacterMixin from 'Store/character.mixin';
import { ArmorItem, ShieldItem, ProtectiveItem } from './';

export default {
  mixins: [CharacterMixin],
  components: { ArmorItem, ShieldItem, ProtectiveItem },
  data() {
    return {
      minimize: false
    }
  }
}
</script>

<style>
.gear-area {
  display: grid;
  grid-template-rows: repeat(4, auto);
  grid-row-gap: 15px;
}

.gear-area input[type="text"] {
  text-align: center;
}
</style>
