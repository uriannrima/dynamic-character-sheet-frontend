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
    <saving-throw v-for="(savingThrow, index) in savingThrows"
                  :key="index"
                  v-bind='$extract(savingThrow)'
                  :keyScoreName="savingThrow.keyAbility"
                  :keyScoreModifier="getTempModifier(getAbilityScore(savingThrow.keyAbility))"
                  @onUpdateSavingThrow="updateSavingThrow($event)" />
  </div>
</template>

<script>
import { SavingThrow } from '../Components';
import { mapState, mapGetters, mapActions } from '../Store';

export default {
  components: { SavingThrow },
  computed: {
    ...mapState(['savingThrows']),
    ...mapGetters(['getAbilityScore', 'getTempModifier'])
  },
  methods: {
    ...mapActions(['updateSavingThrow'])
  }
}
</script>

<style>
.saving-throws-component {
  display: grid;
  grid-template-rows: 20% repeat(3, 1fr);
  align-items: center;

  grid-row-gap: 2px;
}

.saving-throws-label {
  font-size: 78% !important;
  font-weight: bold;
}
</style>
