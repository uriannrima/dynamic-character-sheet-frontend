<script>
export default {
    props: ['abilityScore']
}
</script>

<template>
    <tr>
        <th>
            <span>{{ abilityScore.name.substring(0, 3) }}</span>
            <small>{{ abilityScore.name }}</small>
        </th>
        <td>
            <input type="number" class="attribute-field" v-model.number="abilityScore.value">
        </td>
        <td>
            <input type="number" class="attribute-field" readonly v-bind:value="abilityScore.getModifier()">
        </td>
        <td>
            <input type="number" class="attribute-field" v-model.number="abilityScore.tempValue">
        </td>
        <td>
            <input type="number" class="attribute-field" readonly :value="abilityScore.getTempModifier()">
        </td>
    </tr>
</template>
