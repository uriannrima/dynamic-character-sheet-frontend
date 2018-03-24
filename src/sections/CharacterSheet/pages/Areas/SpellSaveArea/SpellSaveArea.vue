<template>
  <div class="dc-area">
    <spell-save :keyScoreModifier="getTempModifier(keyScore)"></spell-save>
    <arcane-spell-failure :spellFailure="getSpellFailure"></arcane-spell-failure>
    <div class="spell-condition-modifier-container">
      <condition-modifiers></condition-modifiers>
    </div>
  </div>
</template>

<script>
import { SpellSave, ArcaneSpellFailure } from './';
import { ConditionModifiers } from '../WeaponsArea';
import { mapState, mapGetters } from 'store/CharacterModule';

export default {
  components: { SpellSave, ArcaneSpellFailure, ConditionModifiers },
  computed: {
    ...mapState(['keyAbilityScores']),
    ...mapGetters(['getAbilityScore', 'getTempModifier', 'getSpellFailure']),
    keyScore() {
      return this.getAbilityScore(this.keyAbilityScores.spells);
    }
  }
}
</script>

<style>
.spell-condition-modifier-container {
  margin-top: 5px;
}
</style>
