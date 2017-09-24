<script>
import DcsModal from 'Shared/modal.component';
import SkillService from 'Services/skill.service';

export default {
    props: ['show', 'describeSkill', 'characterSkills'],
    components: { DcsModal },
    data: function() {
        return {
            selectedSkill: "",
            newSkill: SkillService.new(),
            allSkills: []
        }
    },
    methods: {
        clear: function() {
            this.selectedSkill = "";
            this.newSkill = SkillService.new();
        },
        cancel: function() {
            this.close();
        },
        close: function() {
            this.clear();
            this.$emit('update:describeSkill', null);
            this.$emit('update:show', false);
        },
        addNewSkill: function() {
            // New skill being created.
            if (!this.selectedSkill) {
                // SkillService.saveOrUpdate(this.newSkill).then(skillCreated => {
                //     
                // });

                this.$emit('onSkillAdded', this.newSkill);
                this.clear();
                this.close();
            } else {
                this.$emit('onSkillAdded', this.selectedSkill);
                this.clear();
                this.close();
            }
        },
        removeSkill: function() {
            this.$emit('onSkillRemoved', this.describeSkill);
            this.clear();
            this.close();
        }
    },
    beforeUpdate() {
        if (this.show) {
            // SkillService.getAll().then(skills => {
            //     this.allSkills = skills;
            // });
        }
    }
}
</script>

<style scoped>
input[type="text"],
textarea,
select {
    width: 100%;
}

textarea {
    height: 80px;
    font-size: 12px;
}

.v-modal-container {
    width: 360px;
}

.skills-header {
    text-align: center;
}
</style>

<template>
    <dcs-modal :show.sync="show" :on-close="close">
        <div slot="header">
            <div class="skills-header black-box">
                <span class="health-points-abbreviation">Skill</span>
            </div>
        </div>
        <!-- Skill Description -->
        <div slot="body" v-if="selectedSkill">
            <div>
                <span>
                    <strong>Name:</strong>
                </span>
                <span>{{selectedSkill.name}} [{{selectedSkill.keyAbility}}]</span>
            </div>
            <div>
                <span>
                    <strong>Description:</strong>
                </span>
                <span>{{selectedSkill.description}}</span>
            </div>
        </div>
        <!-- Adding new skill -->
        <div slot="body" v-else>
            <span>Select skill:</span>
            <select v-model="selectedSkill">
                <option value="">New skill</option>
                <option v-for="(skill, index) in allSkills" :value="skill" :key="index">{{skill.name}}
                </option>
            </select>
            <div v-if="!selectedSkill">
                <div>
                    <span style="display:block">Name:</span>
                    <input type="text" v-model="newSkill.name">
                </div>
                <div>
                    <span style="display:block">Key Ability:</span>
                    <select v-model="newSkill.keyAbility">
                        <option value="strength">Strength</option>
                        <option value="dexterity">Dexterity</option>
                        <option value="constitution">Constitution</option>
                        <option value="intelligence">Intelligence</option>
                        <option value="wisdom">Wisdom</option>
                        <option value="charisma">Charisma</option>
                    </select>
                </div>
                <span style="display:block">Description:</span>
                <textarea type="text" v-model="newSkill.description"></textarea>
                <div>
                    <span>Untrained:</span>
                    <input type="checkbox" v-model="newSkill.untrained" style="vertical-align: middle">
                </div>
                <div>
                    <span>Armor Check Penalty:</span>
                    <input type="checkbox" v-model="newSkill.armorCheckPenalty" style="vertical-align: middle">
                </div>
                <div>
                    <span>Sub Value:</span>
                    <input type="checkbox" v-model="newSkill.hasSubValue" style="vertical-align: middle">
                </div>
                <div v-if="newSkill.hasSubValue">
                    <span>Value:</span>
                    <input type="text" v-model="newSkill.subValue"></input>
                </div>
            </div>
        </div>
        <div slot="footer" style="text-align: center;">
            <button @click="cancel()">Close</button>
            <button @click="addNewSkill()" v-show="!describeSkill">Add</button>
            <button @click="removeSkill()" v-show="describeSkill">Remove</button>
        </div>
    </dcs-modal>
</template>
