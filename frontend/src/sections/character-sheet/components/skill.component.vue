<script>
export default {
    props: ['skill']
}
</script>


<template>
    <tr>
        <td style="text-align: left">
            <input type="checkbox"
                style="width:5%; vertical-align: inherit; margin-left: 2px">
            <span class="skill-name-label" v-bind:class="{ 'untrained-skill': skill.untrained }">{{skill.name}}</span>
        </td>
        <td>
            <span v-bind:class="{ 'armor-check-penalty': skill.armorCheckPenalty }">{{skill.keyAbility | uppercase}}</span>
        </td>
        <td>
            <input type="text"> =
        </td>
        <td>
            <input type="text">
        </td>
        <td>
            <input type="text">
        </td>
        <td>
            <input type="text">
        </td>
    </tr>
</template>
