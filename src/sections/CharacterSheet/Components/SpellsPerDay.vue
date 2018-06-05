<template>
  <div class="spells-per-day-component">
    <div class="spells-per-day-header">
      <label>Spells<br>Known</label>
      <label>Spell<br>Save DC</label>
      <label>Level</label>
      <label>Spells<br>Per Day</label>
      <label>Bonus<br>Spells</label>
    </div>
    <single-spell-per-day v-for="(spells, spellLevel, index) in spells.groupBy(spell => spell.level)"
                          :key="index"
                          :spellPerDay="spellPerDayList[index]"
                          :spellLevel="spellLevel"
                          :keyScoreModifier="getTempModifier(keyScore)"
                          :spellsPerLevel="spells.length"></single-spell-per-day>
  </div>
</template>

<script>
import { SingleSpellPerDay } from '../Components'
import { mapState, mapGetters } from '../Store'

export default {
  components: { SingleSpellPerDay },
  computed: {
    ...mapState(['spells', 'spellPerDayList', 'keyAbilityScores']),
    ...mapGetters(['getAbilityScore', 'getTempModifier']),
    keyScore () {
      return this.getAbilityScore(this.keyAbilityScores.spells)
    }
  }
}
</script>

<style>
.spells-per-day-component > div {
  margin-top: 2px;
}

.spells-per-day-header > label {
  display: block;
  text-transform: uppercase;
  font-weight: bolder;
  font-size: 75%;
  align-self: center;
  text-align: center;
}
</style>
