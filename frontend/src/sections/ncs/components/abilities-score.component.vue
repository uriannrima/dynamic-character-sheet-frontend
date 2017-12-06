<template>
  <div class="abilities-scores-container">
    <div class="ability-score-container ability-score-header">
      <label>Ability<br>Name</label>
      <label>Ability<br>Score</label>
      <label>Ability<br>Modifier</label>
      <label>Temporary<br>Score</label>
      <label>Temporary<br>Modifier</label>
    </div>
    <div v-for="n in 6" :key="n" class="ability-score-container">
      <div class="black-box">
        <label>CON</label>
        <label>Constitution</label>
      </div>
      <input type="number" value="10" class="ability-score-input">
      <input type="number" value="10" class="ability-score-input" readonly>
      <div class="temporary-box">
        <input type="number" value="10" class="ability-score-temp-input">
      </div>
      <div class="temporary-box">
        <input type="number" value="10" class="ability-score-temp-input" readonly>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.abilities-scores-container {
  height: 100%;
  display: grid;
  grid-template-rows: 10% repeat(6, 15%);
}

.ability-score-container {
  display: grid;
  grid-template-columns: 25% repeat(4, 18.75%);
}

.ability-score-container input {
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

.ability-score-header > label {
  font-size: 50%;
  line-height: 9px;
  text-transform: uppercase;
  text-align: center;
}
</style>
