<template>
  <div class="dc-area">
    <spell-save-component :keyAbility="getKeyAbility('intelligence')"></spell-save-component>
    <arcane-spell-failure-component></arcane-spell-failure-component>
    <div class="spell-conditional-modifier-container">
      <conditional-modifiers-component></conditional-modifiers-component>
    </div>

  </div>
</template>

<script>
import KeyAbilityMixin from 'Shared/mixins/methods/key.ability.mixin';
import SpellSaveComponent from './components/dc.area/spell-save.component';
import ArcaneSpellFailureComponent from './components/dc.area/arcane-spell-failure.component';
import ConditionalModifiersComponent from './components/weapons.area/conditional-modifiers.component';

export default {
  mixins: [KeyAbilityMixin],
  components: { SpellSaveComponent, ArcaneSpellFailureComponent, ConditionalModifiersComponent }
}
</script>

<style>
.spell-conditional-modifier-container {
  margin-top: 5px;
}
</style>
