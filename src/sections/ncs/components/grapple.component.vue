<template>
  <div class="grapple-component">
    <div class="black-box grapple-box">
      <label>Grapple</label>
      <label>Modifier</label>
    </div>
    <input type="text" class="common-input" readonly>
    <input type="text" class="common-input" readonly>
    <input type="number" class="common-input" readonly>
    <input type="number" class="common-input" readonly>
    <input type="number" class="common-input">
    <span>&nbsp</span>
    <span class="total-label">Total</span>
    <span>Base Attack<br>Bonus</span>
    <span>Strength<br>Modifier</span>
    <span>Size<br>Modifier</span>
    <span>Misc<br>Modifier</span>
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
  grid-template-rows: auto 25%;
  align-items: center;
  justify-items: center;
}

.grapple-component span {
  font-size: 50%;
  line-height: 8px;
  text-transform: uppercase;
  text-align: center;
}
</style>
