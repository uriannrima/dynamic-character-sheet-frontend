<script>
export default {
    props: ['abilityScore'],
    data: function () {
        return {
            tempScore: this.abilityScore.value
        }
    },
    computed: {
        getAbilityModifier: function () {
            return Math.floor((this.abilityScore.value - 10) / 2);
        },
        getTempModifier: function(){
            return Math.floor((this.tempScore - 10) / 2);
        }
    }
}
</script>


<template>
    <tr>
        <th>
            <span>{{ abilityScore.name.substring(0, 3) }}</span>
            <small>{{ abilityScore.name }}</small>
        </th>
        <td>
            <input type="number" class="attribute-field" v-model="abilityScore.value">
        </td>
        <td>
            <input type="number" class="attribute-field" readonly v-bind:value="getAbilityModifier">
        </td>
        <td>
            <input type="number" class="attribute-field" v-model="tempScore">
        </td>
        <td>
            <input type="number" class="attribute-field" readonly v-bind:value="getTempModifier">
        </td>
    </tr>
</template>
