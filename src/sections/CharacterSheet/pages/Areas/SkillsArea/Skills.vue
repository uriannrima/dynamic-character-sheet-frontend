<template>
  <div class="skills-component">
    <div class="skills-header">
      <div class="class-skill-container">
        <label class="class-skill-label"
               v-show="!minimize">Class Skill?</label>
      </div>
      <div class="black-box rounded">
        <div>
          <label>Skills</label>
          <minimize-button :minimize.sync="minimize"></minimize-button>
        </div>
      </div>
      <div class="headers-container"
           v-show="!minimize">
        <label class="skill-name-header">Skill Name</label>
        <label class="skill-value-header">Key<br>Ability</label>
        <label class="skill-value-header">Skill<br>Modifier</label>
        <label class="skill-value-header">Ability<br>Modifier</label>
        <label class="skill-value-header">Ranks</label>
        <label class="skill-value-header">Misc<br>Modifier</label>
      </div>
    </div>
    <div class="skills-body"
         v-show="!minimize">
      <skill v-for="(skill, index) in character.skills"
             :key="index"
             :skill="skill"
             :keyAbility="getKeyAbility(skill.keyAbility)"></skill>
    </div>
  </div>
</template>

<script>
import { Skill } from './';
import KeyAbilityMixin from 'Shared/mixins/methods/key.ability.mixin';
import MinimizableMixin from 'Shared/mixins/states/minimizable.mixin';

export default {
  mixins: [KeyAbilityMixin, MinimizableMixin],
  components: { Skill },
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