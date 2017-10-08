<script>
import DcsModal from 'Shared/modal.component';
import SkillService from 'Services/skill.service';
import { FormBus, SkillForm } from 'Shared/forms/';

export default {
    // Need to fix to this...
    // extends: DcsModal, 
    props: ['show', 'describeSkill', 'characterSkills'],
    components: { DcsModal, SkillForm },
    data: function() {
        return {
            backupSkill: null,
            selectedSkill: "",
            newSkill: SkillService.new(),
            editing: false,
            isCharacterSkill: false,
            allSkills: []
        }
    },
    watch: {
        show: function(val) {
            if (val) {
                this.updateAllSkills();
            }
        }
    },
    methods: {
        resetScroll: function() {
            this.$el.querySelector('.v-modal-container').scrollTop = 0;
        },
        updateAllSkills: function() {
            SkillService.getAll().then(skills => {
                this.allSkills = skills;
            });
        },
        clear: function() {
            this.backupSkill = null;
            this.selectedSkill = "";
            this.newSkill = SkillService.new();;
            this.editing = false;
            this.isCharacterSkill = false;
            this.$validator.reset();
            FormBus.$emit('skill:clear');
        },
        close: function() {
            this.clear();
            this.clearDescription();
            this.$emit('update:show', false);
        },
        addNewSkill: function() {
            // New skill being created.
            if (!this.selectedSkill) {
                this.$emit('onSkillAdded', this.selectedSkill);
                this.close();
            } else {
                this.$validator.validateAll().then(result => {
                    if (result) {
                        SkillService.saveOrUpdate(this.newSkill).then(skillCreated => {
                            this.$emit('onSkillAdded', this.newSkill);
                            this.close();
                        });
                    }
                });
            }
        },
        removeSkill: function() {
            this.$emit('onSkillRemoved', this.describeSkill);
            this.close();
        },
        saveSkill: function() {
            this.$validator.validateAll().then(result => {
                if (result) {
                    if (!this.isCharacterSkill) {
                        SkillService.saveOrUpdate(this.newSkill).then(skillSaved => {
                            // this.updateAllSkills();
                            var index = this.allSkills.findIndex(s => s._id === skillSaved._id);
                            this.allSkills.splice(index, 1, skillSaved);
                            this.editing = false;
                            this.clear();
                            this.selectedSkill = skillSaved;
                            this.resetScroll();
                        });
                    } else {
                        this.$emit('onSkillUpdated', this.newSkill);
                        this.close();
                    }
                }
            });
        },
        editSkill: function() {
            this.backupSkill = this.selectedSkill || this.describeSkill;
            this.resetScroll();
            var data = this.describeSkill || this.selectedSkill;
            if (this.describeSkill) {
                this.isCharacterSkill = true;
            }
            this.newSkill = SkillService.new(data);
            this.editing = true;
            this.clearDescription();
        },
        cancelEdit: function() {
            this.editing = false;
            if (this.isCharacterSkill) {
                this.$emit('update:describeSkill', this.backupSkill);
            } else {
                this.selectedSkill = this.backupSkill;
            }
        },
        clearDescription: function() {
            this.$emit('update:describeSkill', null);
            this.selectedSkill = "";
        }
    }
}
</script>

<style scoped>
select {
    width: 100%;
}

.skills-header {
    text-align: center;
}

.skill-form-component>>>textarea {
    display: block;
    width: 100%;
    height: 80px;
    font-size: 12px;
}

.skill-form-component>>>input[type="text"],
.skill-form-component>>>select {
    display: block;
    width: 100%;
}

.skill-form-component>>>strong {
    display: block;
}

.sub-value-container {
    margin-bottom: 5px;
}

.sub-value-container>span,
.sub-value-container>input[type="text"] {
    display: block;
    width: 100%;
}

.select-skill-container {
    margin-bottom: 10px;
}
</style>

<template>
    <dcs-modal :show.sync="show" :on-close="close">
        <div slot="header">
            <div class="skills-header black-box">
                <span class="health-points-abbreviation">Skill</span>
            </div>
        </div>
        <div slot="body">
            <div class="select-skill-container" v-if="!describeSkill && !editing">
                <span>Select skill:</span>
                <select v-model="selectedSkill">
                    <option value="">New skill</option>
                    <option v-for="(skill, index) in allSkills" :value="skill" :key="index">{{skill.name}}
                    </option>
                </select>
            </div>
            <div class="sub-value-container" v-if="selectedSkill">
                <span>Sub Value:</span>
                <input type="text" v-model.trim="selectedSkill.subValue"> {{selectedSkill}}
            </div>
            <skill-form :skill="newSkill" :describeSkill="selectedSkill || describeSkill"></skill-form>
            <div v-show="errors.any()">
                <ul>
                    <li v-for="(error,index) in errors.all()" :key="index">{{error}}</li>
                </ul>
            </div>
        </div>
        <div slot="footer" style="text-align: center;">
            <button @click="saveSkill()" v-show="editing">Save</button>
            <button @click="cancelEdit()" v-show="editing">Cancel</button>
            <button @click="addNewSkill()" v-show="!describeSkill && !editing">Add</button>
            <button @click="editSkill()" v-show="describeSkill || selectedSkill">Edit</button>
            <button @click="removeSkill()" v-show="describeSkill">Remove</button>
        </div>
    </dcs-modal>
</template>
