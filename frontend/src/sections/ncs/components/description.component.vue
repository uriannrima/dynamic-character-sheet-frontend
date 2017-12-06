<template>
  <div class="description-component">
    <div class="horizontal-container">
      <input type="text" class="full-width-input" v-model="character.name">
      <label>Character Name</label>
    </div>
    <div class="horizontal-container">
      <input type="text" class="full-width-input" v-model="character.playerName">
      <label>Player Name</label>
    </div>
    <div class="horizontal-container">
      <input type="text" class="full-width-input">
      <label>Class and Level</label>
    </div>
    <div class="three-part-area">
      <div class="horizontal-container">
        <input type="text" class="full-width-input" v-model="character.race">
        <label>Race</label>
      </div>
      <div class="horizontal-container">
        <input type="text" class="full-width-input" v-model="character.alignment">
        <label>Alignment</label>
      </div>
      <div class="horizontal-container">
        <input type="text" class="full-width-input" v-model="character.deity">
        <label>Deity</label>
      </div>
    </div>
    <div class="four-part-area">
      <div class="horizontal-container">
        <input type="text" class="full-width-input" v-model="character.size.name">
        <label>Size</label>
      </div>
      <div class="horizontal-container">
        <input type="text" class="full-width-input" v-model="character.age">
        <label>Age</label>
      </div>
      <div class="horizontal-container">
        <input type="text" class="full-width-input" v-model="character.gender">
        <label>Gender</label>
      </div>
      <div class="horizontal-container">
        <input type="text" class="full-width-input" v-model="character.height">
        <label>Height</label>
      </div>
    </div>
    <div class="four-part-area">
      <div class="horizontal-container">
        <input type="text" class="full-width-input" v-model="character.weight">
        <label>Weight</label>
      </div>
      <div class="horizontal-container">
        <input type="text" class="full-width-input" v-model="character.eyes">
        <label>Eyes</label>
      </div>
      <div class="horizontal-container">
        <input type="text" class="full-width-input" v-model="character.hair">
        <label>Hair</label>
      </div>
      <div class="horizontal-container">
        <input type="text" class="full-width-input" v-model="character.skin">
        <label>Skin</label>
      </div>
    </div>
  </div>
</template>

<script>
import CharacterStore from 'Store/character.store';

export default {
  computed: {
    character: {
      get() {
        return CharacterStore.Instance.character;
      }
    }
  }
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
