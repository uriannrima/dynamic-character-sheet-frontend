<script>

import SkillForm from 'Shared/forms/skill.form';
import SkillService from 'Services/skill.service';

export default {
    components: { SkillForm },
    data: function() {
        return {
            skill: SkillService.create()
        }
    }
}
</script>
<template>
    <skill-form :skill="skill"> </skill-form>
</template>

