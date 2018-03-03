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
               :value="character.name"
               @change="updateDescription({ name: $event.target.value})">
        <label>Character Name</label>
        <button @click="saveCharacter()">Save</button>
        <button @click="newCharacter()">New</button>
      </div>
      <div class="horizontal-container">
        <input type="text"
               class="full-width-input"
               :value="character.playerName"
               @change="updateDescription({ playerName: $event.target.value})">
        <label>Player Name</label>
      </div>
      <div class="horizontal-container">
        <input type="text"
               class="full-width-input"
               :value="character.classes"
               @change="updateClasses({ classes: $event.target.value })">
        <label>Class and Level</label>
      </div>
      <div class="three-part-area">
        <div class="horizontal-container">
          <input type="text"
                 class="full-width-input"
                 :value="character.race"
                 @change="updateDescription({ race: $event.target.value})">
          <label>Race</label>
        </div>
        <div class="horizontal-container">
          <input type="text"
                 class="full-width-input"
                 :value="character.alignment"
                 @change="updateDescription({ alignment: $event.target.value})">
          <label>Alignment</label>
        </div>
        <div class="horizontal-container">
          <input type="text"
                 class="full-width-input"
                 :value="character.deity"
                 @change="updateDescription({ deity: $event.target.value})">
          <label>Deity</label>
        </div>
      </div>
      <div class="four-part-area">
        <div class="horizontal-container">
          <select :value="character.size.name"
                  class="full-width-input"
                  @change="updateDescription({ size: allSizes.find(size => size.name === $event.target.value) })">
            <option v-for="(size, index) in allSizes"
                    :key="index"
                    :value="character.size.name">{{size.name}}</option>
          </select>
          <label>Size</label>
        </div>
        <div class="horizontal-container">
          <input type="text"
                 class="full-width-input"
                 :value="character.age"
                 @change="updateDescription({ age: $event.target.value})">
          <label>Age</label>
        </div>
        <div class="horizontal-container">
          <input type="text"
                 class="full-width-input"
                 :value="character.gender"
                 @change="updateDescription({ gender: $event.target.value})">
          <label>Gender</label>
        </div>
        <div class="horizontal-container">
          <input type="text"
                 class="full-width-input"
                 :value="character.height"
                 @change="updateDescription({ height: $event.target.value})">
          <label>Height</label>
        </div>
      </div>
      <div class="four-part-area">
        <div class="horizontal-container">
          <input type="text"
                 class="full-width-input"
                 :value="character.weight"
                 @change="updateDescription({ weight: $event.target.value})">
          <label>Weight</label>
        </div>
        <div class="horizontal-container">
          <input type="text"
                 class="full-width-input"
                 :value="character.eyes"
                 @change="updateDescription({ eyes: $event.target.value})">
          <label>Eyes</label>
        </div>
        <div class="horizontal-container">
          <input type="text"
                 class="full-width-input"
                 :value="character.hair"
                 @change="updateDescription({ hair: $event.target.value})">
          <label>Hair</label>
        </div>
        <div class="horizontal-container">
          <input type="text"
                 class="full-width-input"
                 :value="character.skin"
                 @change="updateDescription({ skin: $event.target.value})">
          <label>Skin</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MinimizableMixin from 'Shared/mixins/states/minimizable.mixin';
import SizeService from 'Services/size.service';
import CharacterStore from 'Store/character.store';
import CharacterMixin from 'Store/mixins/character.mixin';
import NotificationService from 'Services/NotificationService';

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
    },
    updateDescription: async function (payload) {

    }
  },
  feathers: {
    characters: {
      async patched(updatedCharacter) {
        if (this.character._id === updatedCharacter._id) {
          this.loadState(updatedCharacter);
          NotificationService.notify({
            type: "success",
            message: "Your character has been updated."
          });
        }
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
