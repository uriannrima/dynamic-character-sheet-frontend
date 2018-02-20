<script>
export default {
  props: ['knownSpells', 'spellLevel', 'spellsPerDay', 'bonusSpells', 'casterAbility'],
  data: function() {
    return {

    };
  },
  computed: {
    getSpellSaveDC: function() {
      return 10 + this.spellLevel + this.casterAbility.getTempModifier();
    }
  },
  methods: {
  }
};
</script>
<template>
    <tr>
        <td>
            <input class="spells-known-input" type="number" readonly :value="knownSpells">
        </td>
        <td>
            <input class="spell-save-dc-input" type="number" readonly :value="getSpellSaveDC">
        </td>
        <td>
            <label v-if="spellLevel === 0" class="spell-level-label">0</label>
            <label v-if="spellLevel === 1" class="spell-level-label">1st</label>
            <label v-if="spellLevel === 2" class="spell-level-label">2nd</label>
            <label v-if="spellLevel === 3" class="spell-level-label">3rd</label>
            <label v-if="spellLevel > 3" class="spell-level-label">{{spellLevel}}th</label>
        </td>
        <td>
            <input class="spells-per-day-input" type="number" :value="spellsPerDay" @input="$emit('update:spellsPerDay', $event.target.value)">
        </td>
        <td>
            <label v-if="spellLevel === 0">0</label>
            <input v-else class="bonus-spells-input" type="number" :value="bonusSpells" @input="$emit('update:bonusSpells', $event.target.value)">
        </td>
    </tr>
</template>