import Mappings from './mappings';
import ObjectUtils from 'Utils/object.utils.js';

export default {
  [Mappings.Mutations.loadCharacter](state, character) {
    state._id = character._id;
    character.abilityScores.map(abilityScore => {
      var stateAbilityScore = state.abilityScores[abilityScore.name];
      ObjectUtils.extractTo(abilityScore, stateAbilityScore);
    });
  },
  updateAbilityScore(state, abilityScore) {
    var stateAbilityScore = state.abilityScores[abilityScore.name];
    ObjectUtils.extractTo(abilityScore, stateAbilityScore);
  }
}
