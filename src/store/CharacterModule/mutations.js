import Mappings from './mappings';
import ObjectUtils from 'utils/object.utils.js';

export default {
  [Mappings.Mutations.updateId](state, _id) {
    state._id = _id;
    window.history.pushState("", "", `/#/character/${_id}`);
  },
  [Mappings.Mutations.updateDescription](state, description) {
    ObjectUtils.extractTo(description, state);
  },
  [Mappings.Mutations.updateClasses](state, { classes }) {
    // TODO: Remake it not to "rewrite" the array.
    // Avoid unnecessary reloads on components using getters.
    state.classes = classes;
  },
  [Mappings.Mutations.updateSize](state, { size }) {
    ObjectUtils.extractTo(size, state.size);
  },
  [Mappings.Mutations.updateAbilityScores](state, abilityScores) {
    // Get abilityScores name
    Object.keys(abilityScores)
      // Map it to abilityScore
      .map(abilityScoreName => abilityScores[abilityScoreName])
      // Calculate modifiers.
      .map(abilityScore => {
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
  [Mappings.Mutations.updateAbilityScore](state, abilityScore) {
    var stateAbilityScore = state.abilityScores[abilityScore.name];
    ObjectUtils.extractTo(abilityScore, stateAbilityScore);
  },
  [Mappings.Mutations.updateStatus](state, status) {
    ObjectUtils.extractTo(status, state.status);
  },
  [Mappings.Mutations.updateSpeed](state, { speed }) {
    state.speed = speed;
  },
  [Mappings.Mutations.updateGear](state, gear) {
    ObjectUtils.extractTo(gear.armor, state.gear.armor);
    ObjectUtils.extractTo(gear.shield, state.gear.shield);
    gear.protectiveItems.forEach((protectiveItem, index) => {
      ObjectUtils.extractTo(protectiveItem, state.gear.protectiveItems[index]);
    });
  },
  [Mappings.Mutations.updateKeyScore](state, { name = '', keyScoreName = '' }) {
    state.keyAbilityScores[name] = keyScoreName;
  },
  [Mappings.Mutations.updateArmorClass](state, armorClass) {
    ObjectUtils.extractTo(armorClass, state.armorClass);
  },
  [Mappings.Mutations.updateDamageReduction](state, { damageReduction }) {
    state.damageReduction = damageReduction;
  },
  [Mappings.Mutations.updateInitiative](state, initiative) {
    ObjectUtils.extractTo(initiative, state.initiative);
  },
  [Mappings.Mutations.updateSavingThrow](state, savingThrow) {
    var stateSavingThrow = state.savingThrows[savingThrow.name];
    ObjectUtils.extractTo(savingThrow, stateSavingThrow);
  },
  [Mappings.Mutations.updateConditionModifiers](state, { conditionModifiers }) {
    state.conditionModifiers = conditionModifiers;
  },
  [Mappings.Mutations.updateBaseAttackBonus](state, { baseAttackBonus }) {
    state.baseAttackBonus = baseAttackBonus;
  }
}
