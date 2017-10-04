<script>
import DcsModal from 'Shared/modal.component';
import SkillService from 'Services/skill.service';
import SkillForm from 'Shared/forms/skill.form';

export default {
    props: ['show', 'describeSkill', 'characterSkills'],
    components: { DcsModal, SkillForm },
    data: function() {
        return {
            selectedSkill: "",
            newSkill: SkillService.new(),
            allSkills: [],
            has: {
                tryAgain: false,
                special: false,
                synergy: false,
                untrained: false
            }
        }
    },
    watch: {
        show: function(val) {
            if (val) {
                SkillService.getAll().then(skills => {
                    this.allSkills = skills;
                });
            }
        }
    },
    methods: {
        clear: function() {
            this.selectedSkill = "";
            this.newSkill = SkillService.new();
            this.has = {
                tryAgain: false,
                special: false,
                synergy: false,
                untrained: false
            }
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
                SkillService.saveOrUpdate(this.newSkill).then(skillCreated => {
                    this.$emit('onSkillAdded', this.newSkill);
                    this.clear();
                    this.close();
                });
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
    }
}
</script>

<!-- style scoped>
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

.skill-form-component>>>textarea {
    display: block;
    width: 100%;
    height: 200px;
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
</style -->

<template>
    <dcs-modal :show.sync="show" :on-close="close">
        <div slot="header">
            <div class="skills-header black-box">
                <span class="health-points-abbreviation">Skill</span>
            </div>
        </div>
        <div slot="body">
            <div v-if="!describeSkill">
                <span>Select skill:</span>
                <select v-model="selectedSkill">
                    <option value="">New skill</option>
                    <option v-for="(skill, index) in allSkills" :value="skill" :key="index">{{skill.name}}
                    </option>
                </select>
            </div>
            <skill-form :skill="newSkill" :describeSkill="selectedSkill || describeSkill"></skill-form>
        </div>
        <div slot="footer" style="text-align: center;">
            <button @click="cancel()">Close</button>
            <button @click="addNewSkill()" v-show="!describeSkill">Add</button>
            <button @click="removeSkill()" v-show="describeSkill">Remove</button>
        </div>
    </dcs-modal>
</template>
