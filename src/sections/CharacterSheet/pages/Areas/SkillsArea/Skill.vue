<template>
  <div class="skill-component">
    <input type="checkbox"
           class="class-skill-checkbox"
           :checked="classSkill"
           @change="$emit('onSkillUpdate', { classSkill: $event.target.checked })">
    <div class="skill-wrapper">
      <div class="skill-name-container">
        <label class="skill-name"
               :class="{ 'untrained-skill': untrained }">{{name}}</label>
        <small class="skill-sub-value"
               v-if="hasSubValue">({{subValues[0].value}})</small>
      </div>
      <label class="skill-key-ability"
             :class="{ 'armor-check-penalty': armorCheckPenalty }">{{keyScoreName.substring(0,3)}}</label>
      <input type="number"
             class="common-input"
             readonly
             :value="skillModifier">
      <input type="number"
             class="only-bottom"
             readonly
             :value="keyScoreModifier">
      <input type="number"
             class="only-bottom"
             :value="rank"
             @change="$emit('onSkillUpdate', { rank: $event.target.value * 1 })">
      <input type="number"
             class="only-bottom"
             :value="miscModifier"
             @change="$emit('onSkillUpdate', { miscModifier: $event.target.value * 1 })">
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'name',
    'classSkill',
    'untrained',
    'armorCheckPenalty',
    'subValues',
    'keyScoreName',
    'keyScoreModifier',
    'rank',
    'miscModifier',
    'gearPenalty'
  ],
  computed: {
    hasSubValue() {
      var { subValues } = this;
      return subValues && subValues.length >= 1 && subValues[0].value;
    },
    skillModifier() {
      var penalty = this.checkPenalty;
      if (this.name === "Swim") penalty += penalty;
      var rankModifier = this.rank;
      if (!this.classSkill) rankModifier = Math.floor(rankModifier / 2);
      return rankModifier + this.miscModifier + this.keyScoreModifier + penalty;
    },
    checkPenalty() {
      var penalty = 0;

      if (this.armorCheckPenalty) {
        penalty += this.gearPenalty;
      }

      return penalty;
    }
  }
}
</script>

<style>
.skill-component {
  display: grid;
  grid-template-columns: 3% auto;
  margin-bottom: 2px;
  margin-top: 2px;
}

.skill-wrapper {
  display: grid;
  grid-template-columns: 40% repeat(5, 12%);
}

.skill-wrapper input {
  width: 98%;
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
  content: "";
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-left: 4px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: black;
  vertical-align: middle;
}

.armor-check-penalty::after {
  content: "*";
}
</style>
