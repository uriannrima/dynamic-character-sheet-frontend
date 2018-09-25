<template>
  <div class="spells__group">
    <div class="spells__group__header">
      <span v-if="level === '0'">Cantrips</span>
      <span v-else>
        <cardinal-component :cardinal="Number(level)"></cardinal-component> Level</span>
      <div class="spells__group__slots"></div>
    </div>
    <div class="spells">
      <div class="spells__header">
        <div class="spells__header__action"
             v-if="false">
        </div>
        <span class="spells__header__name">Name</span>
        <span class="spells__header__time">Time</span>
        <span class="spells__header__range">Range</span>
        <span class="spells__header__dchit">DC / HIT</span>
        <span class="spells__header__effects">Effects</span>
      </div>
      <spells-list :spells="spells"
                   :ability-scores="abilityScores"
                   :base-attack-bonus="baseAttatckBonus">
      </spells-list>
    </div>
  </div>
</template>

<script>
import CardinalComponent from '@/components/CardinalComponent';

import SpellsList from './SpellsList';

export default {
  components: { CardinalComponent, SpellsList },
  props: {
    level: {
      type: [Number, String],
      required: true
    },
    spells: {
      type: Array,
      required: true
    },
    abilityScores: {
      type: Object,
      required: true
    },
    baseAttatckBonus: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style>
</style>
