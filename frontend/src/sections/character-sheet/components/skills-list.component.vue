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
