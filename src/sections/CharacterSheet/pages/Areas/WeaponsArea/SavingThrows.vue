<template>
  <div class="saving-throws-component">
    <div class="saving-throw-grid saving-throw-header">
      <label class="saving-throws-label">Saving Throws</label>
      <label class="total-label">Total</label>
      <label>Base<br>Save</label>
      <label>Ability<br>Modifier</label>
      <label>Magic<br>Modifier</label>
      <label>Misc<br>Modifier</label>
      <label>Temporary<br>Modifier</label>
    </div>
    <saving-throw v-for="(savingThrow, index) in character.savingThrows"
                  :key="index"
                  :savingThrow="savingThrow"
                  :keyAbility="character.abilityScores.find(a => a.name === savingThrow.keyAbility)" />
  </div>
</template>

<script>
import { SavingThrow } from './';
import CharacterMixin from '@Store/mixins/character.mixin';

export default {
  components: { SavingThrow },
  mixins: [CharacterMixin]
}
</script>

<style>
.saving-throws-component {
  display: grid;
  grid-template-rows: 20% repeat(3, 1fr);
  align-items: center;
}

.saving-throws-label {
  font-size: 80% !important;
  font-weight: bold;
}

@media screen and (min-width: 1024px) {
  .saving-throws-component {
    grid-row-gap: 2px;
  }
}
</style>
