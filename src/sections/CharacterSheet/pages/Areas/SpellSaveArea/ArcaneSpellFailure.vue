<template>
  <div class="arcane-spell-failure-component">
    <div class="black-box">
      <label>Arcane Spell Failure</label>
    </div>
    <input type="text"
           class="common-input"
           readonly
           :value="spellFailure | percentage">
  </div>
</template>

<script>
import CharacterMixin from 'store/mixins/character.mixin';

export default {
  filters: {
    percentage: function (value) {
      if (value === '') return;
      return value.toString() + "%";
    }
  },
  mixins: [CharacterMixin],
  computed: {
    spellFailure() {
      var spellFailure = 0;

      var { armor, shield } = this.character.gear;

      if (armor) spellFailure += armor.spellFailure;
      if (shield) spellFailure += shield.spellFailure;

      return spellFailure;
    }
  }
}
</script>

<style>
.arcane-spell-failure-component {
  display: grid;
  grid-template-columns: 75% auto;
  grid-column-gap: 2px;
}

.arcane-spell-failure-component > input {
  text-align: center;
}
</style>
