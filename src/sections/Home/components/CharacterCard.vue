<template>
  <div class="character-card-component">
    <div class="character-card-header">
      <a href
         @click.prevent="confirmDelete()">
        <span class="left-icon glyphicon glyphicon-trash"
              title="Delete character"></span>
      </a>
      <router-link :to="{ name: 'character', params: { id : character._id } }">
        <span class="right-icon glyphicon glyphicon-edit"
              title="Edit character"></span>
      </router-link>
      <label>
        {{character.description.name}}
      </label>
      <label>
        {{getCharacterClasses}}
      </label>
    </div>
    <div class="character-card-body">
      <div class="a-divider">
        <span>Ability Scores</span>
      </div>
      <div class="ability-scores-container">
        <div class="ability-score-container"
             v-for="abilityScore in character.abilityScores"
             :key="abilityScore.name">
          <span class="ability-score-name">
            {{abilityScore.name.substring(0, 3)}}
          </span>
          <small>
            {{abilityScore.value}}({{abilityScore.tempModifier}})
          </small>
        </div>
      </div>
    </div>
    <div class="character-card-footer">
    </div>
  </div>
</template>

<script>
export default {
  props: ["character"],
  computed: {
    getCharacterClasses() {
      return this.character.classes
        .filter(classe => classe.name)
        .map(classe => `${classe.name} (${classe.level})`)
        .reduce((reducer, classe) => reducer === "" ? classe : reducer + ", " + classe, "");
    },
    getPassiveSkills() {
      return this.character.skills.filter(
        ({ name }) => ["Perception", "Listen", "Spot"].indexOf(name) !== -1
      );
    }
  },
  methods: {
    confirmDelete() {
      this.$dialog.confirm(`Do you really want to delete ${this.character.description.name}?`).then(() => {
        this.$emit('onDelete', { character: this.character });
      });
    }
  }
};
</script>

<style scoped>
.a-divider {
  width: 100%;
  text-align: center;
  position: relative;
  z-index: 1;
}

.a-divider span {
  display: inline-block;
  background-color: white;
  padding: 0 5px;
}

.a-divider:before {
  content: "";
  width: 100%;
  background-color: transparent;
  position: absolute;
  top: 50%;
  left: 0;
  border-top: 1px solid #9a2b20;
  z-index: -1;
}

.left-icon {
  float: left;
}

.right-icon {
  float: right;
}

.character-card-component {
  background: white;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  border-radius: 5px;
  margin: 5px 15px 5px;
  width: 300px;
  border: solid 1px #9a2b20;
}

.character-card-header {
  text-align: center;
  border-bottom: solid 1px #9a2b20;
}

.character-card-header label {
  display: block;
}

.ability-scores-container {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 0 15px 0;
}

.ability-score-container {
  text-align: center;
}

.ability-score-container label {
  display: block;
}

.ability-score-name {
  text-transform: uppercase;
  font-weight: bolder;
}

.character-card-footer {
  border-top: solid 1px #9a2b20;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}

.skills-container {
  text-align: center;
}

/** Circle logic. */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.circle {
  display: inline-block;
  border: solid 2px;
}

.circle.small {
  width: 40px;
  height: 40px;
  border-radius: 40px;
}

.circle.medium {
  width: 60px;
  height: 60px;
  border-radius: 50px;
}

.circle.big {
  width: 90px;
  height: 90px;
  border-radius: 55px;
}

.circle.medium > input {
  font-size: 35px;
}

.circle.big > input {
  font-size: 50px;
}

.circle > input {
  border: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  background: transparent;
  font-weight: bolder;
}

.circle.red {
  border-color: red;
  background-color: #f98a8a;
}

.circle.blue {
  border-color: blue;
  background-color: #7373eb;
}

.circle.green {
  border-color: green;
  background-color: #a1ffa1;
}
</style>
