<template>
  <store-container module="Character"
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

import StoreContainer from '@/store/components/StoreContainer';

export default {
  components: {
    StoreContainer,
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
