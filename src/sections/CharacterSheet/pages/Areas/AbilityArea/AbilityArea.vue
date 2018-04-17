<template>
  <div>
    <ability-scores :ability-scores="abilityScores"
                    @onUpdateScore="updateAbilityScore"></ability-scores>
  </div>
</template>

<script>
import { AbilityScores } from "./";
import { mapState, mapActions } from 'store/CharacterModule';

export default {
  components: { AbilityScores },
  computed: {
    ...mapState(['abilityScores'])
  },
  methods: {
    ...mapActions(['updateAbilityScore'])
  }
}
</script>

<style>

</style>
