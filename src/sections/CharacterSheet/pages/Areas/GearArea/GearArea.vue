<template>
  <div class="gear-area">
    <div class="black-box rounded">
      <div>
        <label>Gear</label>
        <minimize-button :minimize.sync="minimize"></minimize-button>
      </div>
    </div>
    <armor-item v-show="!minimize"
                :armor="character.gear.armor"></armor-item>
    <shield-item v-show="!minimize"
                 :shield="character.gear.shield"></shield-item>
    <protective-item v-show="!minimize"
                     v-for="(protectiveItem, index) in character.gear.protectiveItems"
                     :key="index"
                     :protectiveItem="protectiveItem"></protective-item>
  </div>

</template>

<script>
import CharacterMixin from 'Store/character.mixin';
import { ArmorItem, ShieldItem, ProtectiveItem } from './';
import MinimizableMixin from 'Shared/mixins/states/minimizable.mixin';

export default {
  mixins: [CharacterMixin, MinimizableMixin],
  components: { ArmorItem, ShieldItem, ProtectiveItem }
}
</script>

<style>
.gear-area > div {
  margin-top: 5px;
}

.gear-area input[type="text"] {
  text-align: center;
}
</style>
