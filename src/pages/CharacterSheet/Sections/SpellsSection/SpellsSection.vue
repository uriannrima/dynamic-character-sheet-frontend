<template>
  <div class="spells-section">
    <spells :spells="spells"
            :classes="getClasses"
            :ability-scores="abilityScores"
            :base-attack-bonus="baseAttackBonus[0]">
    </spells>
  </div>
</template>

<script>
import { Spells } from './Spells';

import { mapState } from '@/pages/CharacterSheet/Store/Character';

export default {
  components: { Spells },
  computed: {
    ...mapState(['spells', 'classes', 'abilityScores', 'baseAttackBonus']),
    getClasses() {
      return this.classes.groupBy(classe => classe.name);
    }
  }
};
</script>

<style>
</style>
