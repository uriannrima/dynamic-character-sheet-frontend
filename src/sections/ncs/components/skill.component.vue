<template>
  <div class="skill-component">
    <div class="class-skill">
      <input type="checkbox" class="class-skill-input" v-model="skill.classSkill">
    </div>
    <div class="skill-name">
      <span>{{skill.name}}</span>
    </div>
    <div class="skill-key-ability">
      <span>{{keyAbility.name.substring(0,3)}}</span>
    </div>
    <div class="skill-modifier">
      <input type="number" class="common-input" readonly :value="skillModifier">
    </div>
    <div class="skill-ability-modifier">
      <input type="number" class="only-bottom" readonly :value="keyAbility.getTempModifier()">
    </div>
    <div class="skill-ranks">
      <input type="number" value="0" class="only-bottom" v-model.number="skill.rank">
    </div>
    <div class="skill-misc-modifier">
      <input type="number" value="0" class="only-bottom" v-model.number="skill.miscModifier">
    </div>
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
  grid-template-columns: 5% 40% repeat(5, 1fr);
}

.skill-name {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  display: grid;
  align-items: center;
}

.skill-key-ability {
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  text-align: center;
  text-transform: uppercase;
}

.skill-modifier {
  grid-column: 4 / 5;
  grid-row: 1 / 2;
  text-align: center;
}

.skill-ability-modifier {
  grid-column: 5 / 6;
  grid-row: 1 / 2;
  text-align: center;
}

.skill-ranks {
  grid-column: 6 / 7;
  grid-row: 1 / 2;
  text-align: center;
}

.skill-misc-modifier {
  grid-column: 7 / 8;
  grid-row: 1 / 2;
  text-align: center;
}

.class-skill {
  display: grid;
  align-items: center;
  justify-items: center;
}

.class-skill-input {
  width: 75%;
  height: 75%;
}

.skill-subvalue-input {
  width: 10%;
}
</style>
