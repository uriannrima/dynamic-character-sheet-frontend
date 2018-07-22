<template>
  <div class="skills-area skills-component">
    <div class="skills-header">
      <div class="class-skill-container">
        <label class="class-skill-label">Class Skill?</label>
      </div>
      <div class="black-box rounded">
        <div>
          <label>Skills</label>
          <open-modal-button :showModal.sync="showModal"></open-modal-button>
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
    <div class="skills-body">
      <skill v-for="(skill, index) in skills"
             :key="index"
             v-bind="skill"
             :keyAbilityModifier="getTempModifier(getAbilityScore(skill.keyAbility))"
             :gearPenalty="getGearPenalty"
             @onSkillUpdate="updateSkill"
             @onSelected="onSkillSelected"></skill>
    </div>
    <skill-modal :show.sync="showModal"
                 :referenceList="skills"
                 :describe.sync="selected"
                 :canEdit="true"
                 @onAdded="addSkill($event.model)"
                 @onRemoved="removeSkill($event.model)"></skill-modal>
  </div>
</template>

<script>
import { ModalContainerMixin } from 'shared/modal'
import { Skill, SkillModal } from '../Components'
import { mapState, mapGetters, mapActions } from '../Store'
import SkillService from 'services/skill.service'

export default {
  components: { Skill, SkillModal },
  mixins: [ModalContainerMixin],
  computed: {
    ...mapState(['skills']),
    ...mapGetters(['getAbilityScore', 'getTempModifier', 'getGearPenalty'])
  },
  methods: {
    ...mapActions(['updateSkill', 'addSkill']),
    onSkillSelected: async function ({ model }) {
      const skill = await SkillService.get(model._id)
      model = Object.assign({}, skill, model)
      this.onSelected({ model })
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
