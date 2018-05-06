<template>
  <div class="gear-area">
    <div class="black-box rounded">
      <div>
        <label>Gear</label>
        <minimize-button :minimize.sync="minimize"></minimize-button>
      </div>
    </div>
    <armor-item v-show="!minimize"
                v-bind="gear.armor"
                @onArmorUpdate="updateArmor($event)"></armor-item>
    <shield-item v-show="!minimize"
                 :shield="gear.shield"
                v-bind="gear.shield"
                @onShieldUpdate="updateShield($event)"></shield-item>
    <protective-item v-show="!minimize"
                     v-for="(protectiveItem, index) in gear.protectiveItems"
                     :key="index"
                     v-bind="protectiveItem"
                     @onProtectiveItemUpdate="updateProtectiveItem({ index, protectiveItem: $event })"></protective-item>
  </div>

</template>

<script>
import { ArmorItem, ShieldItem, ProtectiveItem } from '../Components';
import MinimizableMixin from 'shared/mixins/states/minimizable.mixin';
import { mapState, mapActions } from '../Store';

export default {
  components: { ArmorItem, ShieldItem, ProtectiveItem },
  mixins: [MinimizableMixin],
  computed: {
    ...mapState(['gear'])
  },
  methods: {
    ...mapActions(['updateArmor', 'updateShield', 'updateProtectiveItem'])
  }
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
