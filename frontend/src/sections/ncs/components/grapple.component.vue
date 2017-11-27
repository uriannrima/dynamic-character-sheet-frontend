<template>
  <div class="grapple-component">
    <div class="black-box grapple-box">
      <label>Grapple</label>
      <label>Modifier</label>
    </div>
    <input type="text" class="common-input">
    <input type="text" class="common-input">
    <input type="text" class="common-input">
    <input type="text" class="common-input">
    <input type="text" class="common-input">
  </div>
</template>

<script>
export default {

}
</script>

<style>
.grapple-component {
  display: grid;
  grid-template-columns: 30% repeat(5, 1fr);
  align-items: center;
  justify-items: center;
}
</style>
