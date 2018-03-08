<template>
  <div class="spells-per-day-component">
    <div class="spells-per-day-header">
      <label>Spells<br>Known</label>
      <label>Spell<br>Save DC</label>
      <label>Level</label>
      <label>Spells<br>Per Day</label>
      <label>Bonus<br>Spells</label>
    </div>
    <single-spell-per-day v-for="(spells, spellLevel, index) in character.spells.groupBy(spell => spell.level)"
                          :key="index"
                          :spellPerDay="character.spellPerDayList[index]"
                          :spellLevel="spellLevel"
                          :keyAbility="getKeyAbility('intelligence')"
                          :spellsPerLevel="spells.length"></single-spell-per-day>
  </div>
</template>

<script>
import KeyAbilityMixin from 'shared/mixins/methods/key.ability.mixin';
import { SingleSpellPerDay } from './';

export default {
  components: { SingleSpellPerDay },
  mixins: [KeyAbilityMixin]
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
