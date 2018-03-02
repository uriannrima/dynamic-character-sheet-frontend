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
               @change="update({ name: $event.target.value})">
        <label>Character Name</label>
        <button @click="saveCharacter()">Save</button>
        <button @click="newCharacter()">New</button>
      </div>
      <div class="horizontal-container">
        <input type="text"
               class="full-width-input"
               :value="playerName"
               @change="update({ playerName: $event.target.value})">
        <label>Player Name</label>
      </div>
      <div class="horizontal-container">
        <input type="text"
               class="full-width-input"
               :value="classes"
               @change="updateClasses({ classes: $event.target.value })">
        <label>Class and Level</label>
      </div>
      <div class="three-part-area">
        <div class="horizontal-container">
          <input type="text"
                 class="full-width-input"
                 :value="race"
                 @change="update({ race: $event.target.value})">
          <label>Race</label>
        </div>
        <div class="horizontal-container">
          <input type="text"
                 class="full-width-input"
                 :value="alignment"
                 @change="update({ alignment: $event.target.value})">
          <label>Alignment</label>
        </div>
        <div class="horizontal-container">
          <input type="text"
                 class="full-width-input"
                 :value="deity"
                 @change="update({ deity: $event.target.value})">
          <label>Deity</label>
        </div>
      </div>
      <div class="four-part-area">
        <div class="horizontal-container">
          <select :value="size.name"
                  class="full-width-input"
                  @change="update({ size: allSizes.find(size => size.name === $event.target.value) })">
            <option v-for="(size, index) in allSizes"
                    :key="index"
                    :value="size.name">{{size.name}}</option>
          </select>
          <label>Size</label>
        </div>
        <div class="horizontal-container">
          <input type="text"
                 class="full-width-input"
                 :value="age">
          <label>Age</label>
        </div>
        <div class="horizontal-container">
          <input type="text"
                 class="full-width-input"
                 :value="gender">
          <label>Gender</label>
        </div>
        <div class="horizontal-container">
          <input type="text"
                 class="full-width-input"
                 :value="height">
          <label>Height</label>
        </div>
      </div>
      <div class="four-part-area">
        <div class="horizontal-container">
          <input type="text"
                 class="full-width-input"
                 :value="weight">
          <label>Weight</label>
        </div>
        <div class="horizontal-container">
          <input type="text"
                 class="full-width-input"
                 :value="eyes">
          <label>Eyes</label>
        </div>
        <div class="horizontal-container">
          <input type="text"
                 class="full-width-input"
                 :value="hair">
          <label>Hair</label>
        </div>
        <div class="horizontal-container">
          <input type="text"
                 class="full-width-input"
                 :value="skin">
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
import CharacterMixin from 'Store/character.mixin';
import StoredComponentMixinFactory from 'Store/stored.component.mixin.factory';
import DescriptionStore from './DescriptionStore';

export default {
  mixins: [
    CharacterMixin,
    MinimizableMixin,
    StoredComponentMixinFactory({
      module: DescriptionStore,
      moduleNamespace: ['Character', 'Description'],
      stateMapping: true,
      gettersMapping: true,
      mutationsMapping: true,
      actionsMapping: true
    })
  ],
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
    update: async function (payload) {
      // const description = { ...payload };
      // this.saveStateAsync({ description });
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
