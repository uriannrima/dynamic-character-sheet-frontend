<template>
  <div class="spells__list">
    <spell v-for="spell in spells"
           :key="spell._id"
           :spell="spell"
           :ability-scores="abilityScores"
           :base-attack-bonus="baseAttackBonus">
    </spell>
  </div>
</template>

<script>
import Spell from './Spell';

export default {
  components: { Spell },
  props: {
    spells: {
      type: Array,
      required: true
    },
    abilityScores: {
      type: Object,
      required: true
    },
    baseAttackBonus: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style>
</style>
