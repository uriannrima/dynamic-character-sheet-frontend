<template>
  <div class="initiative-area armor-initiative-grid">
    <secondary-armor></secondary-armor>
    <initiative :keyScoreName="keyScore.name"
                :keyScoreModifier="getTempModifier(keyScore)"></initiative>
  </div>
</template>

<script>
import { SecondaryArmor, Initiative } from '../Components'
import { mapState, mapGetters } from '../Store'

export default {
  components: { SecondaryArmor, Initiative },
  computed: {
    ...mapState(['keyAbilityScores']),
    ...mapGetters(['getAbilityScore', 'getTempModifier']),
    keyScore () {
      return this.getAbilityScore(this.keyAbilityScores.initiative)
    }
  }
}
</script>

<style>
.armor-initiative-grid {
  display: grid;
  grid-template-rows: auto auto;
  grid-row-gap: 2px;
}

@media screen and (min-width: 1024px) {
  .armor-initiative-grid {
    grid-template-rows: 35% auto;
  }
}
</style>
