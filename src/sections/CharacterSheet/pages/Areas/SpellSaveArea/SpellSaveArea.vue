<template>
  <div class="dc-area">
    <spell-save :keyAbility="getKeyAbility('intelligence')"></spell-save>
    <arcane-spell-failure></arcane-spell-failure>
    <div class="spell-condition-modifier-container">
      <condition-modifiers></condition-modifiers>
    </div>
  </div>
</template>

<script>
import KeyAbilityMixin from 'shared/mixins/methods/key.ability.mixin';
import { SpellSave, ArcaneSpellFailure } from './';
import { ConditionModifiers } from '../WeaponsArea';

export default {
  components: { SpellSave, ArcaneSpellFailure, ConditionModifiers },
  mixins: [KeyAbilityMixin]
}
</script>

<style>
.spell-condition-modifier-container {
  margin-top: 5px;
}
</style>
