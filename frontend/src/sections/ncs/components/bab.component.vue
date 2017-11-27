<template>
  <div class="bab-component">
    <div class="black-box bab-box">
      <label>Base Attack Bonus</label>
    </div>
    <input class="common-input">
  </div>
</template>

<script>
export default {

}
</script>

<style>
.bab-component {
  display: grid;
  grid-template-columns: 70% 1fr;
  align-items: center;
  justify-items: center;
}

.bab-box {
  height: 70% !important;
  align-items: center;
}
</style>
