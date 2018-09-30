<template>
  <store-container module="CharacterSheet/Character"
                   namespaced
                   :map-state="['abilityScores', 'savingThrows']">
    <div class="ability-save-section"
         slot-scope="mappings">
      <ability-scores :ability-scores="mappings.state.abilityScores"
                      v-on="$listeners">
      </ability-scores>
      <saving-throws :saving-throws="mappings.state.savingThrows"
                     :ability-scores="mappings.state.abilityScores"
                     v-on="$listeners">
      </saving-throws>
      <miscelaneous v-on="$listeners"></miscelaneous>
    </div>
  </store-container>

</template>

<script>
import { AbilityScores } from './AbilityScores';
import { Miscelaneous } from './Miscelaneous';
import { SavingThrows } from './SavingThrows';

export default {
  components: {
    AbilityScores,
    Miscelaneous,
    SavingThrows
  }
};
</script>

<style lang="scss" scoped>
.ability-save-section {
}
</style>
