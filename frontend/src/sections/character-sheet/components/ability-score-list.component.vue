<script>
import DcsAbilityScore from './ability-score.component';

export default {
    props: ['abilityScores'],
    components: {
        DcsAbilityScore
    }
}
</script>

<style>
.ability-table {
    margin-bottom: 10px;
}

.ability-table tbody td:nth-child(4),
.ability-table tbody td:nth-child(5) {
    background-color: #ccc;
}
.small-label {
    text-transform: uppercase;
    font-size: 8px;
}
</style>

<template>
    <!-- Ability Score -->
    <table class="table ability-table">
        <thead>
            <tr>
                <th>
                    <span class="small-label">Ability Name</span>
                </th>
                <th>
                    <span class="small-label">Ability Score</span>
                </th>
                <th>
                    <span class="small-label">Ability Modifier</span>
                </th>
                <th>
                    <span class="small-label">Temp Score</span>
                </th>
                <th>
                    <span class="small-label">Temp Modifier</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <dcs-ability-score v-for="abilityScore in abilityScores" v-bind:ability-score="abilityScore" :key="abilityScore.name"></dcs-ability-score>
        </tbody>
    </table>
</template>
