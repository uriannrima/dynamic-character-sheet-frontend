<template>
  <div class="gear-area">
    <armor-item v-bind="gear.armor"
                @onArmorUpdate="updateArmor($event)"></armor-item>
    <shield-item :shield="gear.shield"
                 v-bind="gear.shield"
                 @onShieldUpdate="updateShield($event)"></shield-item>
    <protective-item v-for="(protectiveItem, index) in gear.protectiveItems"
                     :key="index"
                     v-bind="protectiveItem"
                     @onProtectiveItemUpdate="updateProtectiveItem({ index, protectiveItem: $event })"></protective-item>
  </div>

</template>

<script>
import { ArmorItem, ShieldItem, ProtectiveItem } from '../Components';
import { mapState, mapActions } from '../Store';

export default {
  components: { ArmorItem, ShieldItem, ProtectiveItem },
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
