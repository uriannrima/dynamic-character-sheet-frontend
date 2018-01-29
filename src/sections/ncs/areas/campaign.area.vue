<template>
  <div class="campaign-grid">
    <div class="campaign-component">
      <input class="common-input only-bottom">
      <label>Campaign</label>
    </div>
    <div class="experience-component">
      <input class="common-input ">
      <label>Experience Points</label>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style>
.campaign-grid {
  display: grid;
  grid-template-rows: 50% 50%;
}

.campaign-grid label {
  text-transform: uppercase;
  font-size: 75%;
}
</style>
