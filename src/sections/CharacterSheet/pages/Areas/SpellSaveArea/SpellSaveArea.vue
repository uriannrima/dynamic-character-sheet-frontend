<template>
  <div class="dc-area">
    <spell-save :keyAbility="getKeyAbility('intelligence')"></spell-save>
    <arcane-spell-failure></arcane-spell-failure>
    <div class="spell-conditional-modifier-container">
      <conditional-modifiers></conditional-modifiers>
    </div>
  </div>
</template>

<script>
import KeyAbilityMixin from '@Shared/mixins/methods/key.ability.mixin';
import { SpellSave, ArcaneSpellFailure } from './';
import { ConditionalModifiers } from '../WeaponsArea';

export default {
  components: { SpellSave, ArcaneSpellFailure, ConditionalModifiers },
  mixins: [KeyAbilityMixin]
}
</script>

<style>
.spell-conditional-modifier-container {
  margin-top: 5px;
}
</style>
