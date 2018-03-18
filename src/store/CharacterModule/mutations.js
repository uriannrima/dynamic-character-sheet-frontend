import Mappings from './mappings';
import ObjectUtils from 'utils/object.utils.js';
import { CharacterState } from './state';

export default {
  [Mappings.Mutations.newCharacter](state) {
    ObjectUtils.extractTo(new CharacterState, state);
  },
  [Mappings.Mutations.updateId](state, { _id }) {
    state._id = _id;
    window.history.pushState("", "", `/#/character/${_id}`);
  },
  [Mappings.Mutations.updateDescription](state, { description }) {
    ObjectUtils.extractTo(description, state.description);
  },
  [Mappings.Mutations.updateClasses](state, { classes }) {
    // TODO: Remake it not to "rewrite" the array.
    // Avoid unnecessary reloads on components using getters.
    state.classes = classes;
  },
  [Mappings.Mutations.updateSize](state, { size }) {
    ObjectUtils.extractTo(size, state.size);
  },
  [Mappings.Mutations.updateAbilityScores](state, { abilityScores }) {
    // Get abilityScores name
    Object.keys(abilityScores)
      // Map it to abilityScore
      .map(abilityScoreName => abilityScores[abilityScoreName])
      // Calculate modifiers.
      .forEach(abilityScore => {
        const stateAbilityScore = state.abilityScores[abilityScore.name];
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
    const stateAbilityScore = state.abilityScores[abilityScore.name];
    ObjectUtils.extractTo(abilityScore, stateAbilityScore);
  },
  [Mappings.Mutations.updateStatus](state, { status }) {
    ObjectUtils.extractTo(status, state.status);
  },
  [Mappings.Mutations.updateSpeed](state, { speed }) {
    state.speed = speed;
  },
  [Mappings.Mutations.updateGear](state, { gear }) {
    ObjectUtils.extractTo(gear.armor, state.gear.armor);
    ObjectUtils.extractTo(gear.shield, state.gear.shield);
    gear.protectiveItems.forEach((protectiveItem, index) => {
      ObjectUtils.extractTo(protectiveItem, state.gear.protectiveItems[index]);
    });
  },
  [Mappings.Mutations.updateKeyScore](state, { name = '', keyScoreName = '' }) {
    state.keyAbilityScores[name] = keyScoreName;
  },
  [Mappings.Mutations.updateArmorClass](state, { armorClass }) {
    ObjectUtils.extractTo(armorClass, state.armorClass);
  },
  [Mappings.Mutations.updateDamageReduction](state, { damageReduction }) {
    state.damageReduction = damageReduction;
  },
  [Mappings.Mutations.updateInitiative](state, { initiative }) {
    ObjectUtils.extractTo(initiative, state.initiative);
  },
  [Mappings.Mutations.updateSavingThrows](state, { savingThrows }) {
    Object.keys(savingThrows)
      .map(savingThrowName => savingThrows[savingThrowName])
      .forEach(savingThrow => {
        const stateSavingThrow = state.savingThrows[savingThrow.name];
        ObjectUtils.extractTo(savingThrow, stateSavingThrow);
      });
  },
  [Mappings.Mutations.updateSavingThrow](state, savingThrow) {
    const stateSavingThrow = state.savingThrows[savingThrow.name];
    ObjectUtils.extractTo(savingThrow, stateSavingThrow);
  },
  [Mappings.Mutations.updateConditionModifiers](state, { conditionModifiers }) {
    state.conditionModifiers = conditionModifiers;
  },
  [Mappings.Mutations.updateBaseAttackBonus](state, { baseAttackBonus }) {
    state.baseAttackBonus = baseAttackBonus;
  },
  [Mappings.Mutations.updateSpellResistance](state, { spellResistance }) {
    state.spellResistance = spellResistance;
  },
  [Mappings.Mutations.updateAttacks](state, { attacks = [] }) {
    attacks.forEach((attack, index) => {
      const stateAttack = state.attacks[index];
      ObjectUtils.extractTo(attack, stateAttack);
    });
  },
  [Mappings.Mutations.updateAttack](state, { index, attack }) {
    const stateAttack = state.attacks[index];
    ObjectUtils.extractTo(attack, stateAttack);
  },
  [Mappings.Mutations.updateSkills](state, { skills = [] }) {
    skills.forEach(skill => {
      const stateSkill = state.skills.find(sSkill => sSkill.name === skill.name);
      ObjectUtils.extractTo(skill, stateSkill);
    });
  },
  [Mappings.Mutations.updateSkill](state, { index, skill }) {
    const stateSkill = state.skills[index];
    ObjectUtils.extractTo(skill, stateSkill);
  },
  [Mappings.Mutations.updateCampaign](state, { campaign }) {
    state.campaign = campaign;
  },
  [Mappings.Mutations.updateExperience](state, { experience }) {
    state.experience = experience;
  },
  [Mappings.Mutations.updateArmor](state, armor) {
    ObjectUtils.extractTo(armor, state.gear.armor);
  },
  [Mappings.Mutations.updateShield](state, shield) {
    ObjectUtils.extractTo(shield, state.gear.shield);
  },
  [Mappings.Mutations.updateProtectiveItem](state, { index, protectiveItem }) {
    const stateProtectiveItem = state.gear.protectiveItems[index];
    ObjectUtils.extractTo(protectiveItem, stateProtectiveItem);
  },
  [Mappings.Mutations.updateItems](state, { items }) {
    items.forEach((item, index) => {
      const stateItem = state.items[index];
      ObjectUtils.extractTo(item, stateItem);
    });
  },
  [Mappings.Mutations.updateItem](state, { index, item }) {
    const stateItem = state.items[index];
    ObjectUtils.extractTo(item, stateItem);
  }
}
