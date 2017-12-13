<template>
  <div class="skills-component">
    <div class="skills-header">
      <div class="class-skill-wrapper">
        <span>Class Skill?</span>
      </div>
      <div class="skills-header-wrapper">
        <span class="descriptor skills-span">Skills</span>
      </div>
      <div class="max-ranks-wrapper">
        <div>
          <span>Max Ranks</span>
          <span>(Class/Cross Class)</span>
        </div>
        <input type="text">
        <input type="text">
      </div>
      <div class="skill-name-header">
        <span>Skill Name</span>
      </div>
      <div class="skill-descriptor-header">
        <span>Key<br>Ability</span>
      </div>
      <div class="skill-descriptor-header">
        <span>Skill<br>Modifier</span>
      </div>
      <div class="skill-descriptor-header">
        <span>Ability<br>Modifier</span>
      </div>
      <div class="skill-descriptor-header">
        <span>Ranks</span>
      </div>
      <div class="skill-descriptor-header">
        <span>Misc<br>Modifier</span>
      </div>
    </div>
    <div class="skills-body">
      <skill-component v-for="(skill, index) in orderedSkills" :key="index" :skill="skill" :keyAbility="getKeyAbility(skill.keyAbility)"/>
    </div>
    <div class="skills-instructions">
      <span>Double click on skill name to edit or see description.</span>
      <span>Mark this box with an X if the skill is a class skill for the character.</span>
      <span class="untrained-skill">Denotes a skill that can be used untrained.</span>
      <span class="armor-check-penalty">Armor check penalty, if any applies.
        <strong>(Double for Swim)</strong>.</span>
    </div>
  </div>
</template>

<script>
import SkillComponent from './skill.component';
import CharacterMixin from 'Store/character.mixin';

export default {
  mixins: [CharacterMixin],
  components: {
    SkillComponent
  },
  methods: {
    getKeyAbility(abilityName) {
      return this.character.abilityScores.find(ability => ability.name === abilityName);
    }
  },
  computed: {
    orderedSkills() {
      return _.sortBy(this.character.skills, [
        skill => {
          var keyAbility = this.getKeyAbility(skill.keyAbility);
          return skill.rank + skill.miscModifier + keyAbility.getTempModifier();
        }
      ]);
    }
  }
}
</script>

<style>
.skills-component {
  display: grid;
  grid-template-rows: 6% 89% 5%;
}

.skills-header {
  display: grid;
  grid-template-rows: 65% 35%;
  grid-template-columns: 5% 40% repeat(5, 1fr);
}

.class-skill-wrapper {
  grid-row: 1 / 3;
  grid-column: 1/2;
  background-color: black;
  color: white;
  text-align: center;
}

.class-skill-wrapper span {
  transform: rotate(90deg);
  display: block;
  font-size: 9px;
  padding-left: 5px;
  white-space: nowrap;
}

.skills-header-wrapper {
  grid-column: 1 / 8;
  grid-row: 1 / 2;
  text-align: center;
  background-color: black;
  color: white;
  display: grid;
  align-items: center;
}

.skills-span {
  font-size: 120%;
}

.max-ranks-wrapper {
  grid-row: 1/2;
  grid-column: 4 / span 4;
  color: white;
  text-align: end;
  margin: auto auto;
}

.max-ranks-wrapper div:nth-child(1) {
  display: inline-block;
}

.max-ranks-wrapper span {
  font-size: 8px;
  display: block;
}

.max-ranks-wrapper input {
  width: 20%;
}

.skill-name-header {
  display: grid;
  align-items: center;
  border: solid 1px black;
}

.skill-descriptor-header {
  text-align: center;
  line-height: 7px;
  display: grid;
  align-items: center;
  border: solid 1px black;
}

.skill-name-header span,
.skill-descriptor-header span {
  text-transform: uppercase;
}

.skill-descriptor-header span {
  font-size: 40%;
}

.skills-body {
  display: grid;
  grid-row-gap: 2px;
  grid-auto-rows: 1em;
}

.skills-body div {
  font-size: 78%;
}

.skills-body input[type="number"] {
  width: 90%;
  height: 100%;
  text-align: center;
}

.skills-instructions span {
  text-align: center;
  display: block;
  font-style: italic;
  font-size: 50%;
}

.untrained-skill::before {
  content: "";
  display: inline-block;
  width: 4px;
  height: 4px;
  margin-right: 4px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: black;
  vertical-align: middle;
}

.armor-check-penalty::before {
  content: "*";
}
</style>
