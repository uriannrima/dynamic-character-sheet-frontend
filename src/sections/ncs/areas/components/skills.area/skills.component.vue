<template>
  <div class="skills-component">
    <div class="skills-header">
      <div class="class-skill-container">
        <label class="class-skill-label">Class Skill?</label>
      </div>
      <div class="black-box">
        <div>
          <label>Skills</label>
          <span class="add-icon glyphicon" :class="{'glyphicon-zoom-out' : !minimize, 'glyphicon-zoom-in' : minimize}" @click="minimize = !minimize"></span>
        </div>
      </div>
      <div class="headers-container">
        <label class="skill-name-header">Skill Name</label>
        <label class="skill-value-header">Key<br>Ability</label>
        <label class="skill-value-header">Skill<br>Modifier</label>
        <label class="skill-value-header">Ability<br>Modifier</label>
        <label class="skill-value-header">Ranks</label>
        <label class="skill-value-header">Misc<br>Modifier</label>
      </div>
    </div>
    <div class="skills-body" v-show="!minimize">
      <skill-component v-for="(skill, index) in character.skills" :key="index" :skill="skill" :keyAbility="getKeyAbility(skill.keyAbility)"></skill-component>
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
  data() {
    return {
      minimize: false
    };
  },
  methods: {
    getKeyAbility(abilityName) {
      return this.character.abilityScores.find(ability => ability.name === abilityName);
    }
  },
  computed: {
    orderedSkills() {
      return this.character.skills.orderBy(s => s.name);
    }
  }
}
</script>

<style>
.skills-header {
  display: grid;
  grid-template-columns: 3% auto;
  grid-template-rows: 50% 50%;
}

.class-skill-container {
  grid-row: 1 / 3;
  grid-column: 1 / 2;
  background-color: black;
  color: white;
  padding-top: 3px;
}

.class-skill-label {
  font-size: 35%;
  text-transform: uppercase;
  white-space: nowrap;
  font-weight: bolder;
  display: block;
  transform: rotate(90deg);
  padding-left: 4px;
}

.headers-container {
  display: grid;
  grid-template-columns: 40% repeat(5, 12%);
}

.skill-name-header {
  padding-left: 2px;
  text-transform: uppercase;
  font-weight: bolder;
  border: solid 1px black;
}

.skill-value-header {
  font-size: 50%;
  text-align: center;
  text-transform: uppercase;
  font-weight: bolder;
  border: solid 1px black;
}
</style>
