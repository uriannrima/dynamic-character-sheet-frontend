<script>
import SkillService from 'Services/skill.service';
import { SkillForm } from 'Shared/forms/';
import { default as ModalModelMixin } from './modal-model.mixin';
import { Actions } from 'Store';

export default {
    components: { SkillForm },
    mixins: [ModalModelMixin],
    created: function () {
        this.service = SkillService;
        this.modelName = 'skill';
    },
    methods: {
        addSkill: function () {
            this.addNew(Actions.Character.AddSkill);
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

.sub-value-container > span,
.sub-value-container > input[type="text"] {
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
            <div class="select-skill-container" v-if="!describe && !editing">
                <span>Select skill:</span>
                <select v-model="selected">
                    <option value="">New skill</option>
                    <option v-for="(skill, index) in all" :value="skill" :key="index">{{skill.name}}
                    </option>
                </select>
            </div>
            <div class="sub-value-container" v-if="selected">
                <span>Sub Value:</span>
                <input type="text" v-model.trim="selected.subValue">
            </div>
            <skill-form :skill="model" :describeSkill="selected || describe"></skill-form>
            <div v-show="errors.any()">
                <ul>
                    <li v-for="(error,index) in errors.all()" :key="index">{{error}}</li>
                </ul>
            </div>
        </div>
        <div slot="footer" style="text-align: center;">
            <div v-show="isDuplicated">
                <span style="color: red; font-weight: bold;">Character already has this skill.</span>
            </div>
            <button @click="save()" v-show="editing">Save</button>
            <button @click="cancelEdit()" v-show="editing">Cancel</button>
            <button @click="addSkill()" v-show="!describe && !editing">Add</button>
            <button @click="edit()" v-show="describe || selected">Edit</button>
            <button @click="remove()" v-show="describe">Remove</button>
        </div>
    </dcs-modal>
</template>
