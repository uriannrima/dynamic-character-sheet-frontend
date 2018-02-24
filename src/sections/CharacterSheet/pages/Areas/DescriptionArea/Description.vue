<template>
  <div>
    <div class="black-box rounded h-md-up">
      <div>
        <label>Description</label>
        <minimize-button :minimize.sync="minimize"></minimize-button>
      </div>
    </div>
    <div class="description-component"
         v-show="!minimize">
      <div class="horizontal-container">
        <input type="text"
               class="full-width-input"
               v-model="character.name">
        <label>Character Name</label>
        <button @click="saveCharacter()">Save</button>
        <button @click="newCharacter()">New</button>
      </div>
      <div class="horizontal-container">
        <input type="text"
               class="full-width-input"
               v-model="character.playerName">
        <label>Player Name</label>
      </div>
      <div class="horizontal-container">
        <input type="text"
               class="full-width-input"
               v-model.lazy="computedClass">
        <label>Class and Level</label>
      </div>
      <div class="three-part-area">
        <div class="horizontal-container">
          <input type="text"
                 class="full-width-input"
                 v-model="character.race">
          <label>Race</label>
        </div>
        <div class="horizontal-container">
          <input type="text"
                 class="full-width-input"
                 v-model="character.alignment">
          <label>Alignment</label>
        </div>
        <div class="horizontal-container">
          <input type="text"
                 class="full-width-input"
                 v-model="character.deity">
          <label>Deity</label>
        </div>
      </div>
      <div class="four-part-area">
        <div class="horizontal-container">
          <!-- input type="text" class="full-width-input" v-model="character.size" -->
          <select v-model="character.size"
                  class="full-width-input">
            <option v-for="(size, index) in allSizes"
                    :key="index"
                    :value="size">{{size.name}}</option>
          </select>
          <label>Size</label>
        </div>
        <div class="horizontal-container">
          <input type="text"
                 class="full-width-input"
                 v-model="character.age">
          <label>Age</label>
        </div>
        <div class="horizontal-container">
          <input type="text"
                 class="full-width-input"
                 v-model="character.gender">
          <label>Gender</label>
        </div>
        <div class="horizontal-container">
          <input type="text"
                 class="full-width-input"
                 v-model="character.height">
          <label>Height</label>
        </div>
      </div>
      <div class="four-part-area">
        <div class="horizontal-container">
          <input type="text"
                 class="full-width-input"
                 v-model="character.weight">
          <label>Weight</label>
        </div>
        <div class="horizontal-container">
          <input type="text"
                 class="full-width-input"
                 v-model="character.eyes">
          <label>Eyes</label>
        </div>
        <div class="horizontal-container">
          <input type="text"
                 class="full-width-input"
                 v-model="character.hair">
          <label>Hair</label>
        </div>
        <div class="horizontal-container">
          <input type="text"
                 class="full-width-input"
                 v-model="character.skin">
          <label>Skin</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CharacterStore from 'Store/character.store';
import CharacterMixin from 'Store/character.mixin';
import SizeService from 'Services/size.service';
import MinimizableMixin from 'Shared/mixins/states/minimizable.mixin';

export default {
  mixins: [CharacterMixin, MinimizableMixin],
  data() {
    return {
      allSizes: []
    }
  },
  created: async function () {
    this.allSizes = await SizeService.getAll();
  },
  methods: {
    saveCharacter: async function () {
      if (await CharacterStore.saveCharacter()) {
        window.history.pushState("", "", "/#/ncs/" + this.character._id);
      }
    },
    newCharacter: async function () {
      await CharacterStore.createCharacter();
      console.log(CharacterStore.Instance.character, this.character);
    }
  },
  computed: {
    computedClass: {
      get: function () {
        return this.character.classes.map(classe => {
          if (!classe.name || !classe.level) return "";
          return classe.name + " (" + classe.level + ")";
        });
      },
      set: function (newValue) {
        this.character.classes = [];
        const fieldValues = newValue.split(",");
        fieldValues.forEach(fieldValue => {
          // If empty character
          if (fieldValue.trim() === "") return;

          // Clear whitespaces
          var classLevel = fieldValue.replace(/ /g, "");

          // Regex to get level
          var levelRegex = /\(([^)]+)\)/;

          // Get level data,
          var levelData = levelRegex.exec(classLevel);
          // Extract level from data
          var level = levelData && levelData.length > 1 ? levelData[1] : 1;

          // Remove level from field.
          var classOnly = classLevel.replace(levelRegex, "");
          this.character.classes.push({
            name: classOnly.trim(),
            level: level
          });
        });
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

.description-component input,
.description-component select {
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
