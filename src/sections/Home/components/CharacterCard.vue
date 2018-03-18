<template>
  <div class="character-card-component">
    <div class="character-card-header">
      <a href
         @click.prevent="confirmDelete()">
        <span class="edit-icon glyphicon glyphicon-trash"
              title="Delete character"></span>
      </a>
      <a :href="'#/character/' + character._id">
        <span class="edit-icon glyphicon glyphicon-edit"
              title="Edit character"></span>
      </a>
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
      <div class="a-divider">
        <span>Passive Skills</span>
      </div>
      <div class="skills-container">
        <span>{{getPassiveSkills.map(skill => skill.name).reduce((reducer, skill) => reducer + ', ' + skill)}}</span>
      </div>
    </div>
    <div class="character-card-footer">
      <div class="a-divider">
        <span>Skills</span>
      </div>
      <div class="skills-container">
        <span>{{character.skills.map(skill => skill.name).reduce((reducer, skill) => reducer + ', ' + skill)}}</span>
      </div>
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
      this.$dialog.confirm(`Do you really want to delete ${this.character.name}?`).then(() => {
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

.edit-icon {
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
</style>
