<template>
  <div class="gear-area">
    <div class="black-box">
      <label>Gear</label>
    </div>
    <armor-item-component :armor="character.gear.armor"></armor-item-component>
    <shield-item-component :shield="character.gear.shield"></shield-item-component>
    <protective-item-component v-for="(protectiveItem, index) in character.gear.protectiveItems" :key="index" :protectiveItem="protectiveItem"></protective-item-component>
    <possessions-component :possessions="character.items" :carryCapacities="character.carryCapacities"></possessions-component>
  </div>
  
</template>

<script>
import CharacterMixin from 'Store/character.mixin';
import { ArmorItemComponent, ShieldItemComponent, ProtectiveItemComponent, PossessionsComponent } from '../components';

export default {
  mixins: [CharacterMixin],
  components: { ArmorItemComponent, ShieldItemComponent, ProtectiveItemComponent, PossessionsComponent }
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
