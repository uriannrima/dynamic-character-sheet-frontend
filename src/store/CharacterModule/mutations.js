import Mappings from './mappings';
import ObjectUtils from '@Utils/object.utils.js';

export default {
  [Mappings.Mutations.loadCharacter](state, character) {
    state._id = character._id;

    ObjectUtils.extractTo(character, state, [
      'name', 'playerName', 'classes',
      'race', 'alignment', 'deity',
      'size', 'age', 'gender',
      'height', 'weight', 'eyes',
      'hair', 'skin']);

    character.abilityScores.map(abilityScore => {
      var stateAbilityScore = state.abilityScores[abilityScore.name];
      ObjectUtils.extractTo(abilityScore, stateAbilityScore);
    });

    ObjectUtils.extractTo(character.status, state.status);
  },
  updateDescription(state, description) {
    ObjectUtils.extractTo(description, state);
  },
  updateClasses(state, classes) {
    // TODO: Remake it not to "rewrite" the array.
    // Avoid unnecessary reloads on components using getters.
    state.classes = [];
    const eachClass = classes.split(",");
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
      state.classes.push({
        name: classOnly.trim(),
        level: level
      });
    });
  },
  updateAbilityScore(state, abilityScore) {
    var stateAbilityScore = state.abilityScores[abilityScore.name];
    ObjectUtils.extractTo(abilityScore, stateAbilityScore);
  }
}
