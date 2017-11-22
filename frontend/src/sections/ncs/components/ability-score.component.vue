<template>
  <div class="ability-score-component">
    <label>Ability<br>Name</label>
    <label>Ability<br>Score</label>
    <label>Ability<br>Modifier</label>
    <label>Temporary<br>Score</label>
    <label>Temporary<br>Modifier</label>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.ability-score-component {
  display: grid;
  height: 100%;
  grid-template-rows: 10% repeat(6, 15%);
  grid-template-columns: 25% 19% 19% 18.5% auto;
}

.ability-score-component > label {
  font-size: 75%;
  line-height: 11px;
  align-self: center;
}
</style>
