<script>
import SkillService from 'Services/skill.service';

export default {
    props: ['skills'],
    data: function () {
        return {
            filter: {
                hideNoBonus: false
            }
        }
    },
    computed: {
        filteredSkills: function () {
            if (this.filter.hideNoBonus) return this.skills.filter(skill => skill.getTotal() >= 1);
            return this.skills;
        }
    }
}

</script>

<style>
.skills-column {
    margin-top: -166px;
}

.skills-table thead th {
    border-color: black !important;
    border-style: solid !important;
    border-width: 1px 1px 1px 1px !important;
}

.skills-table tbody th {
    background-color: white;
    color: black;
    border-color: black;
    border-width: 1px 1px 1px 1px;
    border-style: solid;
}

.skills-table tbody td {
    padding: 0px !important;
}

.skills-table thead th,
.skills-table-mobile thead th {
    background-color: black;
    color: white;
}

.skills-table tbody input {
    width: 45px;
}

.skills-label {
    font-size: 23px;
    text-transform: uppercase;
    vertical-align: middle;
}

.skill-name-label {
    font-size: 15px;
}

.untrained-skill::after {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-left: 4px;
    border: 1px solid rgba(0, 0, 0, .2);
    background-color: black;
    vertical-align: middle;
}

.equals-sign::after {
    content: '=';
    position: absolute;
    margin-left: 10px;
}

.plus-sign::after {
    content: '+';
    position: absolute;
    margin-left: 1.5%;
}

.skill-field {
    display: inline-block;
}

.armor-check-penalty::after {
    content: '*';
}

@media only screen and (max-width:992px) {
    .skills-column {
        margin-top: 0px;
    }

    .equals-sign::after {
        margin-left: 5px;
    }
}
</style>


<template>
    <div class="row">
        <div class="col-md-12">
            <!-- Desktop Skill Table -->
            <table class="table skills-table hidden-xs">
                <thead>
                    <tr>
                        <th colspan="6">
                            <span class="skills-label">Skills</span>
                            <input type="checkbox" v-model="filter.hideNoBonus">
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th style="width:40%">
                            <span class="skills-table-header">
                                Skill Name
                            </span>
                        </th>
                        <th>
                            <span class="skills-table-header">Key Ability</span>
                        </th>
                        <th>
                            <span class="skills-table-header">Skill Modifier</span>
                        </th>
                        <th>
                            <span class="skills-table-header">Ability Modifier</span>
                        </th>
                        <th>
                            <span class="skills-table-header">Ranks</span>
                        </th>
                        <th>
                            <span class="skills-table-header">Misc Modifier</span>
                        </th>
                    </tr>
                    <tr v-for="skill in filteredSkills">
                        <td style="text-align: left">
                            <input type="checkbox" style="width:12px; vertical-align: inherit; margin-left: 2px" v-model="skill.classSkill">
                            <span class="skill-name-label" v-bind:class="{ 'untrained-skill': skill.untrained }">{{skill.name}}</span>
                        </td>
                        <td>
                            <span v-bind:class="{ 'armor-check-penalty': skill.armorCheckPenalty }">{{skill.keyAbility.substring(0,3).toUpperCase()}}</span>
                        </td>
                        <td>
                            <div class="equals-sign">
                                <input type="number" style="text-align: center;" readonly v-bind:value="skill.getTotal()">
                            </div>
                        </td>
                        <td>
                            <div class="plus-sign">
                                <input type="number" style="text-align: center;" readonly v-bind:value="skill.abilityModifier">
                            </div>
                        </td>
                        <td>
                            <div class="plus-sign">
                                <input type="number" style="text-align: center;" v-model.number="skill.rank">
                            </div>
                        </td>
                        <td>
                            <input type="number" style="text-align: center;" v-bind:class="{ attention: skill.miscModifier > 0 }" v-model.number="skill.miscModifier">
                        </td>
                    </tr>
                </tbody>
            </table>
    
            <!-- Mobile Skill Table -->
            <table class="table skills-table-mobile visible-xs">
                <thead>
                    <tr>
                        <th>
                            <span class="skills-label">Skills</span>
                            <input type="checkbox" v-model="filter.hideNoBonus">
                        </th>
                    </tr>
                    <tr>
                        <th>
                            Skill Mod = Ability Mod + Ranks + Misc Mod
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="skill in filteredSkills">
                        <td>
                            <div style="display:inline-block;">
                                <input type="checkbox" style="width: 12px; vertical-align: sub;" v-model="skill.classSkill">
                                <span class="skill-name-label" v-bind:class="{ 'untrained-skill': skill.untrained }">{{skill.name}} (
                                    <label v-bind:class="{ 'armor-check-penalty': skill.armorCheckPenalty }">{{skill.keyAbility.substring(0,3).toUpperCase()}}</label>)</span>
                            </div>
                            <div>
                                <input type="number" class="attribute-field skill-field" readonly v-bind:value="skill.getTotal()">
                                <span>=</span>
                                <input type="number" class="attribute-field skill-field" readonly v-bind:value="skill.abilityModifier">
                                <span>+</span>
                                <input type="number" class="attribute-field skill-field" v-model.number="skill.rank">
                                <span>+</span>
                                <input type="number" class="attribute-field skill-field" v-bind:class="{ attention: skill.miscModifier > 0 }" v-model.number="skill.miscModifier">
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>