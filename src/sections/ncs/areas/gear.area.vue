<template>
  <div class="gear-area">
    <div class="black-box">
      <label>Gear</label>
    </div>
    <armor-item-component :armor="character.gear.armor"></armor-item-component>
    <shield-item-component :shield="character.gear.shield"></shield-item-component>
    <protective-item-component v-for="(protectiveItem, index) in character.gear.protectiveItems" :key="index" :protectiveItem="protectiveItem"></protective-item-component>
  </div>
</template>

<script>
import CharacterMixin from 'Store/character.mixin';
import { ArmorItemComponent, ShieldItemComponent, ProtectiveItemComponent } from '../components';

export default {
  mixins: [CharacterMixin],
  components: { ArmorItemComponent, ShieldItemComponent, ProtectiveItemComponent }
}
</script>

<style>
.gear-area {
  display: grid;
  grid-template-rows: repeat(4, auto);
  grid-row-gap: 5px;
}

.gear-area input[type="text"] {
  text-align: center;
}

.shield-item-component {
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-row-gap: 2px;
}

.shield-item-component > div:nth-child(2),
.shield-item-component > div:nth-child(3) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2px;
}

.protective-item-component {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 2px;
}

.protective-item-component {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 2px;
}

.protective-item-component > div:nth-child(2) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2px;
}
</style>
