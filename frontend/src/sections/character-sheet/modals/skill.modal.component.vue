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
        <div slot="body" v-if="describeSkill">
            <div>
                <span>
                    <strong>Name:</strong>
                </span>
                <span>{{describeSkill.name}} [{{describeSkill.keyAbility}}]</span>
            </div>
            <div>
                <span>
                    <strong>Check:</strong>
                </span>
                <span>{{describeSkill.check}}</span>
            </div>
            <div>
                <span>
                    <strong>Action:</strong>
                </span>
                <span>{{describeSkill.action}}</span>
            </div>
            <div v-if="describeSkill.tryAgain">
                <span>
                    <strong>Try Again:</strong>
                </span>
                <span>{{describeSkill.tryAgain}}</span>
            </div>
            <div v-if="describeSkill.special">
                <span>
                    <strong>Special:</strong>
                </span>
                <span>{{describeSkill.special}}</span>
            </div>
            <div v-if="describeSkill.synergy">
                <span>
                    <strong>Synergy:</strong>
                </span>
                <span>{{describeSkill.synergy}}</span>
            </div>
            <div v-if="describeSkill.synergy">
                <span>
                    <strong>Untrained Description:</strong>
                </span>
                <span>{{describeSkill.untrainedDescription}}</span>
            </div>
            <div v-if="describeSkill.subValue">
                <span>
                    <strong>Sub Value:</strong>
                </span>
                <span>{{describeSkill.subValue}}</span>
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
                <div>
                    <span>Check:</span>
                    <textarea type="text" v-model="newSkill.check"></textarea>
                </div>
                <div>
                    <span>Action:</span>
                    <textarea type="text" v-model="newSkill.action"></textarea>
                </div>
                <div>
                    <span>Try Again:</span>
                    <input type="checkbox" v-model="has.tryAgain" style="vertical-align: middle">
                </div>
                <div v-if="has.tryAgain">
                    <textarea type="text" v-model="newSkill.tryAgain"></textarea>
                </div>
                <div>
                    <span>Special:</span>
                    <input type="checkbox" v-model="has.special" style="vertical-align: middle">
                </div>
                <div v-if="has.special">
                    <textarea type="text" v-model="newSkill.special"></textarea>
                </div>
                <div>
                    <span>Synergy:</span>
                    <input type="checkbox" v-model="has.synergy" style="vertical-align: middle">
                </div>
                <div v-if="has.synergy">
                    <textarea type="text" v-model="newSkill.synergy"></textarea>
                </div>
                <div>
                    <span>Untrained:</span>
                    <input type="checkbox" v-model="newSkill.untrained" style="vertical-align: middle">
                </div>
                <div v-if="newSkill.untrained">
                    <span>Untrained Description:</span>
                    <textarea type="text" v-model="newSkill.untrainedDescription"></textarea>
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
            <div v-else>
                <div>
                    <span>
                        <strong>Name:</strong>
                    </span>
                    <span>{{selectedSkill.name}} [{{selectedSkill.keyAbility}}]</span>
                </div>
                <div>
                    <span>Sub Value:</span>
                    <input type="checkbox" v-model="selectedSkill.hasSubValue" style="vertical-align: middle">
                </div>
                <div v-if="selectedSkill.hasSubValue">
                    <span>Value:</span>
                    <input type="text" v-model="selectedSkill.subValue"></input>
                </div>
                <div>
                    <span>
                        <strong>Check:</strong>
                    </span>
                    <span>{{selectedSkill.check}}</span>
                </div>
                <div>
                    <span>
                        <strong>Action:</strong>
                    </span>
                    <span>{{selectedSkill.action}}</span>
                </div>
                <div v-if="selectedSkill.tryAgain">
                    <span>
                        <strong>Try Again:</strong>
                    </span>
                    <span>{{selectedSkill.tryAgain}}</span>
                </div>
                <div v-if="selectedSkill.special">
                    <span>
                        <strong>Special:</strong>
                    </span>
                    <span>{{selectedSkill.special}}</span>
                </div>
                <div v-if="selectedSkill.synergy">
                    <span>
                        <strong>Synergy:</strong>
                    </span>
                    <span>{{selectedSkill.synergy}}</span>
                </div>
                <div v-if="selectedSkill.synergy">
                    <span>
                        <strong>Untrained Description:</strong>
                    </span>
                    <span>{{selectedSkill.untrainedDescription}}</span>
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
