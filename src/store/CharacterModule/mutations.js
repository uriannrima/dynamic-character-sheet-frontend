import Mappings from './mappings';
import ObjectUtils from 'utils/object.utils.js';

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
      /**
       * Since the backend still doesn't have modifier and tempModifier
       * We have to calculate it before updating the state on first load.
       */
      abilityScore.modifier = Math.floor((abilityScore.value - 10) / 2);
      abilityScore.tempModifier = Math.floor((abilityScore.tempValue - 10) / 2);
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
  },
  updateGear(state, gear) {
    ObjectUtils.extractTo(gear.armor, state.gear.armor);
    ObjectUtils.extractTo(gear.shield, state.gear.shield);
    gear.protectiveItems.forEach((protectiveItem, index) => {
      ObjectUtils.extractTo(protectiveItem, state.gear.protectiveItems[index]);
    });
  },
  updateArmorKeyScore(state, armorKeyScore) {
    state.armorKeyAbilityScore = armorKeyScore;
  },
  updateArmorClass(state, armorClass) {
    ObjectUtils.extractTo(armorClass, state.armorClass);
  },
  updateDamageReduction(state, damageReduction) {
    state.damageReduction = damageReduction;
  }
}
