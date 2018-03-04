import Mappings from './mappings';
import ObjectUtils from '@Utils/object.utils.js';

export default {
  [Mappings.Mutations.updateId](state, _id) {
    state._id = _id;
  },
  updateDescription(state, description) {
    ObjectUtils.extractTo(description, state);
  },
  updateClasses(state, classes) {
    // TODO: Remake it not to "rewrite" the array.
    // Avoid unnecessary reloads on components using getters.
    state.classes = classes;
  },
  updateSize(state, size) {
    ObjectUtils.extractTo(size, state.size);
  },
  updateAbilityScores(state, abilityScores) {
    abilityScores.map(abilityScore => {
      var stateAbilityScore = state.abilityScores[abilityScore.name];
      ObjectUtils.extractTo(abilityScore, stateAbilityScore);
    });
  },
  updateAbilityScore(state, abilityScore) {
    var stateAbilityScore = state.abilityScores[abilityScore.name];
    ObjectUtils.extractTo(abilityScore, stateAbilityScore);
  },
  updateStatus(state, status) {
    ObjectUtils.extractTo(status, state.status);
  },
  updateSpeed(state, speed) {
    state.speed = speed;
  }
}
