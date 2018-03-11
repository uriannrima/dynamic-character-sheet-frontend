<template>
  <div class="attack-grid">
    <div class="saving-conditional-grid">
      <saving-throws></saving-throws>
      <conditional-modifiers></conditional-modifiers>
    </div>
    <div class="base-attack-resistance-grid">
      <base-attack-bonus></base-attack-bonus>
      <spell-resistance></spell-resistance>
    </div>
    <grapple :keyScoreName="keyScore.name"
             :keyScoreModifier="getTempModifier(keyScore)"></grapple>
    <attacks></attacks>
  </div>
</template>

<script>
import { SavingThrows, ConditionalModifiers, BaseAttackBonus, SpellResistance, Grapple, Attacks } from './';
import { mapState, mapGetters } from 'store/CharacterModule';


export default {
  components: { SavingThrows, ConditionalModifiers, BaseAttackBonus, SpellResistance, Grapple, Attacks },
  computed: {
    ...mapState(['keyAbilityScores']),
    ...mapGetters(['getAbilityScore', 'getTempModifier']),
    keyScore() {
      return this.getAbilityScore(this.keyAbilityScores.grapple);
    }
  }
}
</script>

<style>
.attack-grid {
  display: grid;
  grid-template-rows: 12% 3% 5% auto;
  grid-row-gap: 5px;
}

.saving-conditional-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 5px;
}

.base-attack-resistance-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 2px;
}

@media screen and (min-width: 1024px) {
  .saving-conditional-grid {
    grid-template-columns: 75% auto;
    grid-column-gap: 5px;
  }

  .base-attack-resistance-grid {
    grid-template-columns: 65% auto;
    grid-column-gap: 10px;
  }
}
</style>
