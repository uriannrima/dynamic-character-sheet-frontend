<template>
  <div class="item">
    <div v-if="item.slot !== 'None'"
         class="dcs__check item__active">
      <label></label>
    </div>
    <span v-else
          class="item__active">--</span>
    <div class="item__name">
      <span>{{item.name}}</span>
      <small>{{item.type}}</small>
    </div>
    <span class="item__weight">{{item.weight}}</span>
    <span class="item__quantity">{{item.quantity}}</span>
    <span class="item__cost">{{item.cost}}</span>
    <span class="item__slot">
      <i :class="slotIcon"
         v-show="slotIcon"></i>
      <span v-show="!slotIcon">{{item.slot}}</span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    slotIcon() {
      switch (this.item.slot) {
        case 'None':
          return 'ra ra-compass';
          break;
        case 'Head':
          return 'icon-barbute';
          break;
        case 'Shoulders':
          return 'icon-shoulder-scales';
          break;
        case 'Torso':
          return 'icon-t-shirt';
          break;
        case 'Arms':
          return 'icon-bracers';
          break;
        case 'Finger':
          return 'icon-ring';
          break;
        case 'Feet':
          return 'icon-walking-boot';
          break;
        case 'Waist':
          return 'icon-belt-armor';
          break;
        case 'Hands':
          return 'icon-gloves';
          break;
        case 'Body':
          return 'icon-chest-armor';
          break;
        case 'Neck':
          return 'icon-emerald-necklace';
          break;
        case 'Face':
          return 'icon-curly-mask';
          break;
        case 'Weapon':
          return 'ra ra-sword';
          break;
      }
    }
  }
};
</script>

<style>
</style>
