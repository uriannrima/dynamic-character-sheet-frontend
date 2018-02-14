<template>
  <div class="gear-area">
    <div class="black-box rounded">
      <div>
        <label>Gear</label>
        <span class="add-icon glyphicon" :class="{'glyphicon-zoom-out' : !minimize, 'glyphicon-zoom-in' : minimize}" @click="minimize = !minimize"></span>        
      </div>
    </div>
    <armor-item-component v-show="!minimize" :armor="character.gear.armor"></armor-item-component>
    <shield-item-component v-show="!minimize" :shield="character.gear.shield"></shield-item-component>
    <protective-item-component v-show="!minimize" v-for="(protectiveItem, index) in character.gear.protectiveItems" :key="index" :protectiveItem="protectiveItem"></protective-item-component>
  </div>

</template>

<script>
import CharacterMixin from 'Store/character.mixin';
import { ArmorItemComponent, ShieldItemComponent, ProtectiveItemComponent, PossessionsComponent } from './components';

export default {
  mixins: [CharacterMixin],
  components: { ArmorItemComponent, ShieldItemComponent, ProtectiveItemComponent, PossessionsComponent },
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
