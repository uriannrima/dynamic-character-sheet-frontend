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
        case 'Head':
          return 'icon-barbute';
        case 'Shoulders':
          return 'icon-shoulder-scales';
        case 'Torso':
          return 'icon-t-shirt';
        case 'Arms':
          return 'icon-bracers';
        case 'Finger':
          return 'icon-ring';
        case 'Feet':
          return 'icon-walking-boot';
        case 'Waist':
          return 'icon-belt-armor';
        case 'Hands':
          return 'icon-gloves';
        case 'Body':
          return 'icon-chest-armor';
        case 'Neck':
          return 'icon-emerald-necklace';
        case 'Face':
          return 'icon-curly-mask';
        case 'Weapon':
          return 'ra ra-sword';
      }
    }
  }
};
</script>

<style>
</style>
