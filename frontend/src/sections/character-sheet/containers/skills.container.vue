<script>
import SkillComponent from '../components/skill.component';
import DcsSkillModal from '../modals/skill.modal.component';

export default {
    props: ['character'],
    components: { SkillComponent, DcsSkillModal },
    data: function() {
        return {
            showModal: false,
            selected: null
        };
    },
    computed: {
        characterSkills: function() {
            return _.sortBy(this.character.skills, skill => skill.name);
        }
    },
    methods: {
        openSkillDescription: function(skill) {
            this.selected = skill;
            this.showModal = true;
        }
    }
}
</script>
<template>
    <div>
        <div class="skills-container">
            <div class="padding-box">
                <table class="skills-table">
                    <thead>
                        <tr>
                            <th colspan="6">
                                <span class="health-points-abbreviation">Skills</span>
                                <span class="add-skill-icon glyphicon glyphicon-plus" @click="showModal = true"></span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                <span>Skill Name</span>
                            </th>
                            <th>
                                <span>Key
                                    <br>Ability</span>
                            </th>
                            <th>
                                <span>Skill
                                    <br>Modifier</span>
                            </th>
                            <th>
                                <span>Ability
                                    <br>Modifier</span>
                            </th>
                            <th>
                                <span>Ranks</span>
                            </th>
                            <th>
                                <span>Misc
                                    <br>Modifier</span>
                            </th>
                        </tr>
                        <skill-component v-for="(skill, index) in characterSkills" :key="index" :classSkill.sync="skill.classSkill" :untrained="skill.untrained"
                            :name="skill.name" :hasSubValue="skill.hasSubValue" :subValue.sync="skill.subValue" :armorCheckPenalty="skill.armorCheckPenalty"
                            :keyAbility="character.getAbilityScore(skill.keyAbility)" :rank.sync="skill.rank" :miscModifier.sync="skill.miscModifier"
                            @onSkillSelected="openSkillDescription(skill)"></skill-component>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="caption-container">
            <span>Double click on skill name to edit or see description.</span>
            <span>Mark this box with an X if the skill is a class skill for the character.</span>
            <span class="untrained-skill">Denotes a skill that can be used untrained.</span>
            <span class="armor-check-penalty">Armor check penalty, if any applies.
                <strong>(Double for Swim)</strong>.</span>
        </div>
        <dcs-skill-modal :show.sync="showModal" :describe-skill.sync="selected" :character-skills="character.skills" @onSkillAdded="$emit('onSkillAdded', $event)"
            @onSkillRemoved="$emit('onSkillRemoved', $event)" @onSkillUpdated="$emit('onSkillUpdated', $event)"></dcs-skill-modal>
    </div>
</template>