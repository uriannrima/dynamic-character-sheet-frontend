<template>
  <div class="ability-area">
    <ability-scores :ability-scores="abilityScores"
                    @onUpdateScore="updateAbilityScore"></ability-scores>
  </div>
</template>

<script>
import { AbilityScores } from '../Components';
import { mapState, mapActions } from '../Store';

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
