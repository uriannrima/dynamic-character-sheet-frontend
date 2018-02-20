<script>
import AbilityScoreComponent from '../components/ability-score.component';
export default {
  props: ['abilityScores'],
  components: { AbilityScoreComponent }
}
</script>
<template>
    <div class="ability-container">
        <table class="ability-table">
            <thead>
                <tr>
                    <th>
                        <span class="ability-score-description">Ability Name</span>
                    </th>
                    <th>
                        <span class="ability-score-description">Ability
                            <br>Score</span>
                    </th>
                    <th>
                        <span class="ability-score-description">Ability
                            <br>Modifier</span>
                    </th>
                    <th>
                        <span class="ability-score-description">Temporary
                            <br>Score</span>
                    </th>
                    <th>
                        <span class="ability-score-description">Temporary
                            <br>Modifier</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <ability-score-component v-for="(abilityScore, index) in abilityScores" :key="index" :abilityScore="abilityScore"> </ability-score-component>
            </tbody>
        </table>
    </div>
</template>