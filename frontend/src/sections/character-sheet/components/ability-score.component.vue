<script>
export default {
    props: ['abilityScore'],
    methods: {
        updateTemporaryScore: function(abilityScore) {
            abilityScore.tempValue = abilityScore.value;
        }
    }
}
</script>

<template>
    <tr>
        <th>
            <div class="black-box">
                <span class="ability-score-abbreviation">{{abilityScore.name.substring(0,3)}}</span>
                <span class="ability-score-name">{{abilityScore.name}}</span>
            </div>
        </th>
        <td>
            <div>
                <input type="number" value="10" class="ability-score-field" v-model.number="abilityScore.value" @change="updateTemporaryScore(abilityScore)">
            </div>
        </td>
        <td>
            <div>
                <input type="number" value="0" class="ability-score-field" readonly :value="abilityScore.getModifier()">
            </div>
        </td>
        <td>
            <div>
                <input type="number" value="10" class="ability-score-field" v-model.number="abilityScore.tempValue">
            </div>
        </td>
        <td>
            <div>
                <input type="number" value="0" class="ability-score-field" readonly :value="abilityScore.getTempModifier()">
            </div>
        </td>
    </tr>
</template>