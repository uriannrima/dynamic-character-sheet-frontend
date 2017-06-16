<script>
import SkillService from 'Services/skill.service';
import DcsSkill from './skill.component';

export default {
    components: { DcsSkill },
    data: function () {
        return {
            allSkills: SkillService.get()
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
 
 .skills-table thead th {
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
 
 @media only screen and (max-width:992px) {
     .skills-column {
         margin-top: 0px;
     }
 }
</style>


<template>
    <div class="row">
        <table class="table skills-table">
            <thead>
                <tr>
                    <th colspan="6">
                        <span class="skills-label">Skills</span>
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
                <dcs-skill v-for="skill in allSkills"
                    :key="skill.id"
                    v-bind:skill="skill"></dcs-skill>
            </tbody>
        </table>
    </div>
</template>
