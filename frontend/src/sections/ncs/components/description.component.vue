<template>
  <div class="description-component">
    <div class="horizontal-container">
      <input type="text" class="full-width-input">
      <label>Character Name</label>
    </div>
    <div class="horizontal-container">
      <input type="text" class="full-width-input">
      <label>Player Name</label>
    </div>
    <div class="horizontal-container">
      <input type="text" class="full-width-input">
      <label>Class and Level</label>
    </div>
    <div class="three-part-area">
      <div class="horizontal-container">
        <input type="text" class="full-width-input">
        <label>Race</label>
      </div>
      <div class="horizontal-container">
        <input type="text" class="full-width-input">
        <label>Alignment</label>
      </div>
      <div class="horizontal-container">
        <input type="text" class="full-width-input">
        <label>Deity</label>
      </div>
    </div>
    <div class="four-part-area">
      <div class="horizontal-container">
        <input type="text" class="full-width-input">
        <label>Size</label>
      </div>
      <div class="horizontal-container">
        <input type="text" class="full-width-input">
        <label>Age</label>
      </div>
      <div class="horizontal-container">
        <input type="text" class="full-width-input">
        <label>Gender</label>
      </div>
      <div class="horizontal-container">
        <input type="text" class="full-width-input">
        <label>Height</label>
      </div>
    </div>
    <div class="four-part-area">
      <div class="horizontal-container">
        <input type="text" class="full-width-input">
        <label>Weight</label>
      </div>
      <div class="horizontal-container">
        <input type="text" class="full-width-input">
        <label>Eyes</label>
      </div>
      <div class="horizontal-container">
        <input type="text" class="full-width-input">
        <label>Hair</label>
      </div>
      <div class="horizontal-container">
        <input type="text" class="full-width-input">
        <label>Skin</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.horizontal-container {
  padding: 0 5px;
}

.description-component {
  grid-area: description-component;
  display: grid;
  grid-template-rows: repeat(3, 33%);
  grid-template-columns: 50% auto;
}

.description-component label {
  font-size: 75%;
  text-transform: uppercase;
}

.description-component input {
  border-width: 0 0 1px 0;
  border-bottom: solid 1px black;
}

.three-part-area {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.four-part-area {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.full-width-input {
  width: 100%;
}

@media screen and (max-width: 768px) {
  .description-component {
    grid-template-columns: 100%;
    grid-template-rows: repeat(6, 1fr);
  }
}
</style>
