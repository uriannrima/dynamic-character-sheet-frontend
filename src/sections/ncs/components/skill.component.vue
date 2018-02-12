<template>
  <div class="skill-component">
    <input type="checkbox" class="class-skill-checkbox" v-model="skill.classSkill">
    <div class="skill-name-container">
      <label class="skill-name" :class="{ 'untrained-skill': skill.untrained }">{{skill.name}}</label>
      <small class="skill-sub-value" v-if="skill.subValue">({{skill.subValue}})</small>
    </div>
    <label class="skill-key-ability" :class="{ 'armor-check-penalty': skill.armorCheckPenalty }">{{skill.keyAbility.substring(0,3)}}</label>
    <input type="number" class="common-input" readonly :value="skillModifier">
    <input type="number" class="only-bottom" readonly :value="keyAbility.getTempModifier()">
    <input type="number" class="only-bottom" v-model.number="skill.rank">
    <input type="number" class="only-bottom" v-model.number="skill.miscModifier">
  </div>
</template>

<script>
import CharacterMixin from 'Store/character.mixin';

export default {
  mixins: [CharacterMixin],
  props: ['skill', 'keyAbility'],
  computed: {
    skillModifier() {
      var penalty = this.checkPenalty;
      if (this.skill.name === "Swim") penalty += penalty;
      var rankModifier = this.skill.rank;
      if (!this.skill.classSkill) rankModifier = Math.floor(rankModifier / 2);
      return rankModifier + this.skill.miscModifier + this.keyAbility.getTempModifier() + penalty;
    },
    checkPenalty() {
      var penalty = 0;

      if (this.skill.armorCheckPenalty) {
        var { armor, shield } = this.character.gear;
        if (armor) penalty += armor.checkPenalty;
        if (shield) penalty += shield.checkPenalty;
      }

      return penalty;
    }
  }
}
</script>

<style>
.skill-component {
  display: grid;
  grid-template-columns: 3% 37% repeat(5, 11%);
  grid-column-gap: 3px;
  margin-top: 2px;
  margin-bottom: 2px;
}

.class-skill-checkbox {
  margin-top: 1px;
  width: 100%;
  height: 100%;
}

.skill-name {
  padding-left: 2px;
  text-transform: uppercase;
  margin: auto 0;
  font-size: 65%;
  font-weight: bolder;
}

.skill-sub-value {
  font-size: 50%;
}

.skill-key-ability {
  text-transform: uppercase;
  text-align: center;
  margin: auto 0;
  font-size: 75%;
  font-weight: bolder;
}

.untrained-skill::after {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-left: 4px;
    border: 1px solid rgba(0, 0, 0, .2);
    background-color: black;
    vertical-align: middle;
}

.armor-check-penalty::after {
    content: '*';
}
</style>
