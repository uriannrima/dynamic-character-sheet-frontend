<template>
  <div class="speed-component">
    <div class="h-lg-up black-box">
      <label>Speed</label>
    </div>
    <label class="speed-label h-md-only">Speed</label>
    <input type="text"
           class="common-input speed-input">
  </div>
</template>

<script>
export default {

}
</script>

<style>
.speed-component {
  display: grid;
  align-items: center;
  grid-template-rows: 38% 1fr 1fr;
  grid-row-gap: 2px;
}

.speed-component label {
  font-size: 50%;
  text-transform: uppercase;
  text-align: center;
}

.speed-component input {
  grid-row-start: 2;
}
</style>
