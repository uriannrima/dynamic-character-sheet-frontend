<script>
    export default {
        props: ['skill']
    }

</script>

<style>
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
        margin-left: 3px;
    }

    @media only screen and (max-width:992px) {
        .skill-name-label {
            font-size: 10px;
        }
        .untrained-skill::after {
            content: '';
            display: inline-block;
            width: 4px;
            height: 4px;
            margin-left: 4px;
            border: 1px solid rgba(0, 0, 0, .2);
            background-color: black;
            vertical-align: middle;
        }

        .equals-sign::after {
            margin-left: 5px;
        }
    }
</style>

<template>
    <tr>
        <td style="text-align: left">
            <input type="checkbox" style="width:5%; vertical-align: inherit; margin-left: 2px">
            <span class="skill-name-label" v-bind:class="{ 'untrained-skill': skill.untrained }">{{skill.name}}</span>
        </td>
        <td>
            <span v-bind:class="{ 'armor-check-penalty': skill.armorCheckPenalty }">{{skill.keyAbility}}</span>
        </td>
        <td>
            <div class="equals-sign">
                <input type="text">
            </div>
        </td>
        <td>
            <div class="plus-sign">
                <input type="text">
            </div>
        </td>
        <td>
            <div class="plus-sign">
                <input type="text">
            </div>
        </td>
        <td>
            <input type="text">
        </td>
    </tr>
</template>