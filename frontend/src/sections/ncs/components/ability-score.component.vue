<template>
    <div class="ability-score-component">
        <div class="black-box">
            <label>{{abilityScore.name.substring(0,3)}}</label>
            <label>{{abilityScore.name}}</label>
        </div>
        <input type="number" value="10" class="ability-score-input" v-model.number="abilityScore.value" @change="updateTemporaryScore()">
        <input type="number" value="10" class="ability-score-input" readonly :value="modifier">
        <div class="temporary-box">
            <input type="number" value="10" class="ability-score-temp-input" v-model.number="abilityScore.tempValue">
        </div>
        <div class="temporary-box">
            <input type="number" value="10" class="ability-score-temp-input" readonly :value="abilityScore.getTempModifier()">
        </div>
    </div>
</template>

<script>
export default {
    props: ['abilityScore'],
    methods: {
        updateTemporaryScore: function () {
            this.abilityScore.tempValue = this.abilityScore.value;
        }
    },
    computed: {
        modifier() {
            return (this.abilityScore.value - 10) / 2;
        }
    },
    mounted() {
        console.log(this.abilityScore);
    }
}
</script>

<style>
.ability-score-component {
  display: grid;
  grid-template-columns: 25% repeat(4, 18.75%);
}

.ability-score-component input {
  width: 75%;
  height: 75%;
  margin: 2px auto;
}

.ability-score-input {
  border: solid 1px black;
}

.ability-score-temp-input {
  border: none;
}
</style>
