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
               :value="name"
               @change="updateDescriptionAsync({ name: $event.target.value })">
        <label>Character Name</label>
        <button @click="saveCharacter()">Save</button>
        <button @click="newCharacter()">New</button>
      </div>
      <div class="horizontal-container">
        <input type="text"
               class="full-width-input"
               :value="playerName"
               @change="updateDescriptionAsync({ playerName: $event.target.value })">
        <label>Player Name</label>
      </div>
      <div class="horizontal-container">
        <input type="text"
               class="full-width-input"
               :value="getClasses"
               @change="updateClasses(parseStringToClasses($event.target.value))">
        <label>Class and Level</label>
      </div>
      <div class="three-part-area">
        <div class="horizontal-container">
          <input type="text"
                 class="full-width-input"
                 :value="race"
                 @change="updateDescriptionAsync({ race: $event.target.value })">
          <label>Race</label>
        </div>
        <div class="horizontal-container">
          <input type="text"
                 class="full-width-input"
                 :value="alignment"
                 @change="updateDescriptionAsync({ alignment: $event.target.value })">
          <label>Alignment</label>
        </div>
        <div class="horizontal-container">
          <input type="text"
                 class="full-width-input"
                 :value="deity"
                 @change="updateDescriptionAsync({ deity: $event.target.value })">
          <label>Deity</label>
        </div>
      </div>
      <div class="four-part-area">
        <div class="horizontal-container">
          <select class="full-width-input"
                  @change="updateSize(allSizes.find(size => size.name === $event.target.value))">
            <option v-for="(size, index) in allSizes"
                    :key="index"
                    :value="size.name"
                    :selected="size.name === getSize">{{size.name}}</option>
          </select>
          <label>Size</label>
        </div>
        <div class="horizontal-container">
          <input type="text"
                 class="full-width-input"
                 :value="age"
                 @change="updateDescriptionAsync({ age: $event.target.value })">
          <label>Age</label>
        </div>
        <div class="horizontal-container">
          <input type="text"
                 class="full-width-input"
                 :value="gender"
                 @change="updateDescriptionAsync({ gender: $event.target.value })">
          <label>Gender</label>
        </div>
        <div class="horizontal-container">
          <input type="text"
                 class="full-width-input"
                 :value="height"
                 @change="updateDescriptionAsync({ height: $event.target.value })">
          <label>Height</label>
        </div>
      </div>
      <div class="four-part-area">
        <div class="horizontal-container">
          <input type="text"
                 class="full-width-input"
                 :value="weight"
                 @change="updateDescriptionAsync({ weight: $event.target.value })">
          <label>Weight</label>
        </div>
        <div class="horizontal-container">
          <input type="text"
                 class="full-width-input"
                 :value="eyes"
                 @change="updateDescriptionAsync({ eyes: $event.target.value })">
          <label>Eyes</label>
        </div>
        <div class="horizontal-container">
          <input type="text"
                 class="full-width-input"
                 :value="hair"
                 @change="updateDescriptionAsync({ hair: $event.target.value })">
          <label>Hair</label>
        </div>
        <div class="horizontal-container">
          <input type="text"
                 class="full-width-input"
                 :value="skin"
                 @change="updateDescriptionAsync({ skin: $event.target.value })">
          <label>Skin</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MinimizableMixin from '@Shared/mixins/states/minimizable.mixin';
import SizeService from '@Services/size.service';
import CharacterStore from '@Store/character.store';
import { mapState, mapGetters, mapMutations, mapActions } from '@Store/CharacterModule'

export default {
  mixins: [MinimizableMixin],
  data() {
    return {
      allSizes: []
    }
  },
  computed: {
    ...mapState([
      '_id', 'name', 'playerName', 'classes',
      'race', 'alignment', 'deity', 'age', 'gender',
      'height', 'weight', 'eyes',
      'hair', 'skin', 'size'
    ]),
    ...mapGetters(['getClasses', 'getSize'])
  },
  created: async function () {
    this.allSizes = await SizeService.getAll();
  },
  methods: {
    ...mapMutations(['updateDescription', 'updateClasses', 'updateSize']),
    ...mapActions(['updateDescriptionAsync']),
    parseStringToClasses(classesAsString) {
      const classes = [];
      const eachClass = classesAsString.split(",");
      eachClass.forEach(classe => {
        // If empty character
        if (classe.trim() === "") return;
        // Clear whitespaces
        var classLevel = classe.replace(/ /g, "");
        // Regex to get level
        var levelRegex = /\(([^)]+)\)/;
        // Get level data,
        var levelData = levelRegex.exec(classLevel);
        // Extract level from data
        var level = levelData && levelData.length > 1 ? levelData[1] : 1;
        // Remove level from field.
        var classOnly = classLevel.replace(levelRegex, "");
        classes.push({
          name: classOnly.trim(),
          level: level
        });
      });
      return classes;
    },
    saveCharacter: async function () {
      if (await CharacterStore.saveCharacter()) {
        window.history.pushState("", "", "/#/ncs/" + this.character._id);
      }
    },
    newCharacter: async function () {
      await CharacterStore.createCharacter();
      console.log(CharacterStore.Instance.character, this.character);
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
