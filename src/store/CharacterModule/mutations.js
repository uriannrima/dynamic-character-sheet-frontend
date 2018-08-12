import { Mutations } from './mappings';
import ObjectUtils from 'utils/object.utils.js';
import { CharacterState } from './state';

export default {
  [Mutations.newCharacter](state, newState = new CharacterState()) {
    ObjectUtils.extractTo(newState, state);
  },
  [Mutations.updateId](state, { _id }) {
    state._id = _id;
    window.history.pushState("", "", `/#/character/${_id}`);
  },
  [Mutations.updateDescription](state, { description }) {
    ObjectUtils.extractTo(description, state.description);
  },
  [Mutations.updateClasses](state, { classes }) {
    // TODO: Remake it not to "rewrite" the array.
    // Avoid unnecessary reloads on components using getters.
    state.classes = classes;
  },
  [Mutations.updateSize](state, { size }) {
    ObjectUtils.extractTo(size, state.size);
  },
  [Mutations.updateAbilityScores](state, { abilityScores }) {
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
  [Mutations.updateAbilityScore](state, abilityScore) {
    const stateAbilityScore = state.abilityScores[abilityScore.name];
    ObjectUtils.extractTo(abilityScore, stateAbilityScore);
  },
  [Mutations.updateStatus](state, { status }) {
    ObjectUtils.extractTo(status, state.status);
  },
  [Mutations.updateSpeed](state, { speed }) {
    state.speed = speed;
  },
  [Mutations.updateGear](state, { gear }) {
    ObjectUtils.extractTo(gear.armor, state.gear.armor);
    ObjectUtils.extractTo(gear.shield, state.gear.shield);
    gear.protectiveItems.forEach((protectiveItem, index) => {
      ObjectUtils.extractTo(protectiveItem, state.gear.protectiveItems[index]);
    });
  },
  [Mutations.updateKeyScore](state, { name = '', keyScoreName = '' }) {
    state.keyAbilityScores[name] = keyScoreName;
  },
  [Mutations.updateArmorClass](state, { armorClass }) {
    ObjectUtils.extractTo(armorClass, state.armorClass);
  },
  [Mutations.updateDamageReduction](state, { damageReduction }) {
    state.damageReduction = damageReduction;
  },
  [Mutations.updateInitiative](state, { initiative }) {
    ObjectUtils.extractTo(initiative, state.initiative);
  },
  [Mutations.updateSavingThrows](state, { savingThrows }) {
    Object.keys(savingThrows)
      .map(savingThrowName => savingThrows[savingThrowName])
      .forEach(savingThrow => {
        const stateSavingThrow = state.savingThrows[savingThrow.name];
        ObjectUtils.extractTo(savingThrow, stateSavingThrow);
      });
  },
  [Mutations.updateSavingThrow](state, savingThrow) {
    const stateSavingThrow = state.savingThrows[savingThrow.name];
    ObjectUtils.extractTo(savingThrow, stateSavingThrow);
  },
  [Mutations.updateConditionModifiers](state, { conditionModifiers }) {
    state.conditionModifiers = conditionModifiers;
  },
  [Mutations.updateBaseAttackBonus](state, { baseAttackBonus }) {
    state.baseAttackBonus = baseAttackBonus;
  },
  [Mutations.updateSpellResistance](state, { spellResistance }) {
    state.spellResistance = spellResistance;
  },
  [Mutations.updateGrapple](state, { grapple }) {
    state.grapple = grapple;
  },
  [Mutations.updateAttacks](state, { attacks = [] }) {
    attacks.forEach((attack, index) => {
      const stateAttack = state.attacks[index];
      ObjectUtils.extractTo(attack, stateAttack);
    });
  },
  [Mutations.updateAttack](state, { index, attack }) {
    const stateAttack = state.attacks[index];
    ObjectUtils.extractTo(attack, stateAttack);
  },
  [Mutations.updateSkills](state, { skills = [] }) {
    skills.forEach(skill => {
      const equalSkill = function (a, b) {
        let same = a._id === b._id;
        if (same && (a.subValues && b.subValues)) same = JSON.stringify(a.subValues) === JSON.stringify(b.subValues);
        return same;
      }
      const stateSkill = state.skills.find(sSkill => equalSkill(sSkill, skill));
      if (!stateSkill) {
        state.skills.push(skill);
      } else {
        ObjectUtils.extractTo(skill, stateSkill);
      }
    });
  },
  [Mutations.updateSkill](state, skill) {
    const equalSkill = function (a, b) {
      let same = a._id === b._id;
      if (same && (a.subValues && b.subValues)) same = JSON.stringify(a.subValues) === JSON.stringify(b.subValues);
      return same;
    }
    const stateSkill = state.skills.find(sSkill => equalSkill(sSkill, skill));
    ObjectUtils.extractTo(skill, stateSkill);
  },
  [Mutations.updateCampaign](state, { campaign }) {
    state.campaign = campaign;
  },
  [Mutations.updateExperience](state, { experience }) {
    state.experience = experience;
  },
  [Mutations.updateArmor](state, armor) {
    ObjectUtils.extractTo(armor, state.gear.armor);
  },
  [Mutations.updateShield](state, shield) {
    ObjectUtils.extractTo(shield, state.gear.shield);
  },
  [Mutations.updateProtectiveItem](state, { index, protectiveItem }) {
    const stateProtectiveItem = state.gear.protectiveItems[index];
    ObjectUtils.extractTo(protectiveItem, stateProtectiveItem);
  },
  [Mutations.updateItems](state, { items }) {
    items.forEach((item, index) => {
      const stateItem = state.items[index];
      ObjectUtils.extractTo(item, stateItem);
    });
  },
  [Mutations.updateItem](state, { index, item }) {
    const stateItem = state.items[index];
    ObjectUtils.extractTo(item, stateItem);
  },


  [Mutations.updateFeats](state, { feats }) {
    feats.forEach(feat => {
      state.feats.push(feat);
    });
  },
  [Mutations.updateSpecialAbilities](state, { specialAbilities }) {
    specialAbilities.forEach(specialAbility => {
      state.specialAbilities.push(specialAbility);
    });
  },
  [Mutations.updateLanguages](state, { languages }) {
    languages.forEach(language => {
      state.languages.push(language);
    });
  },
  [Mutations.updateSpells](state, { spells }) {
    spells.forEach(spell => {
      state.spells.push(spell);
    });
  },

  [Mutations.addSkill](state, skill) {
    skill = skill.toCharacterSkill ? skill.toCharacterSkill() : skill;
    state.skills.push(skill);
  },

  [Mutations.addFeat](state, feat) {
    state.feats.push(feat);
  },
  [Mutations.removeFeat](state, feat) {
    const index = state.feats.map(feat => feat._id).indexOf(feat._id);
    state.feats.splice(index, 1);
  },

  [Mutations.addSpecialAbility](state, specialAbility) {
    state.specialAbilities.push(specialAbility);
  },
  [Mutations.removeSpecialAbility](state, specialAbility) {
    const index = state.specialAbilities.map(specialAbility => specialAbility._id).indexOf(specialAbility._id);
    state.specialAbilities.splice(index, 1);
  },

  [Mutations.addLanguage](state, language) {
    state.languages.push(language);
  },
  [Mutations.removeLanguage](state, language) {
    const index = state.languages.map(language => language._id).indexOf(language._id);
    state.languages.splice(index, 1);
  },

  [Mutations.addSpell](state, spell) {
    state.spells.push(spell);
  },
  [Mutations.removeSpell](state, spell) {
    const index = state.spells.map(spell => spell._id).indexOf(spell._id);
    state.spells.splice(index, 1);
  },
  [Mutations.updateDomainSchool](state, domainSchool) {
    state.domainSchool = domainSchool;
  },
  [Mutations.updateWealth](state, { wealth }) {
    ObjectUtils.extractTo(wealth, state.wealth);
  }
}
