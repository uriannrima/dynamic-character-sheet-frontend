<template>
  <div class="character-card-component">
    <div class="character-card-header">
      <a :href="'#/character/' + character._id">
        <span class="edit-icon glyphicon glyphicon-edit"></span>
      </a>
      <label>
        {{character.name}}
      </label>
      <label>
        {{getCharacterClasses}}
      </label>
    </div>
    <div class="character-card-body">
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
  props: ['character'],
  computed: {
    getCharacterClasses() {
      return this.character
        .classes
        .filter(classe => classe.name)
        .map(classe => `${classe.name} (${classe.level})`)
        .reduce((reducer, classe) => reducer === '' ? classe : reducer + ', ' + classe, '');
    }
  }
}
</script>

<style scoped>
.edit-icon {
  position: absolute;
  right: 0;
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
</style>