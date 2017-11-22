<template>
  <div class="description-component">
    <div>
      Character Name
    </div>
    <div>
      Player Name
    </div>
    <div>
      Class and Level
    </div>
    <div class="three-part-area">
      <div>Race</div>
      <div>Alignment</div>
      <div>Deity</div>
    </div>
    <div class="four-part-area">
      <div>Size</div>
      <div>Age</div>
      <div>Gender</div>
      <div>Height</div>
    </div>
    <div class="four-part-area">
      <div>Weight</div>
      <div>Eyes</div>
      <div>Hair</div>
      <div>Skin</div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.description-component {
  grid-area: description-component;
  display: grid;
  grid-template-rows: repeat(3, 33%);
  grid-template-columns: 50% auto;
}

.three-part-area {
  display: grid;
  grid-template-columns: repeat(3, 33%);
}

.four-part-area {
  display: grid;
  grid-template-columns: repeat(4, 25%);
}

@media screen and (max-width: 768px) {
  .description-component {
    grid-template-columns: 100%;
    grid-template-rows: auto;
  }
}
</style>
