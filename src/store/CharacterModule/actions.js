import { CharacterState } from './state';
import { Actions, Mutations } from './mappings';
import CharacterService from 'services/character.service';
import NotificationService from 'services/NotificationService';
// import ChannelService from 'services/channel.service';
import SkillService from 'services/skill.service';

export default {
  async [Actions.connect](context, characterId) {
    console.log('Connect', characterId);
  },
  async [Actions.saveCharacter]({ commit, state }) {
    const character = await CharacterService.saveOrUpdate(state);
    commit(Mutations.updateId, character);
  },
  async [Actions.newCharacter]({ commit }) {
    const newState = new CharacterState();
    const skills = await SkillService.getDefaultSkills();
    newState.skills = skills.map(skill => skill.toCharacterSkill());
    commit(Mutations.newCharacter, newState);
  },
  async [Actions.loadCharacter]({ commit, dispatch }, characterId) {
    try {
      dispatch(Actions.newCharacter);

      const character = await CharacterService.get(characterId);

      // Load character mutations
      [
        Mutations.updateId,
        Mutations.updateDescription,
        Mutations.updateClasses,
        Mutations.updateSize,
        Mutations.updateAbilityScores,
        Mutations.updateStatus,
        Mutations.updateSpeed,
        Mutations.updateGear,
        Mutations.updateArmorClass,
        Mutations.updateInitiative,
        Mutations.updateSavingThrows,
        Mutations.updateDamageReduction,
        Mutations.updateBaseAttackBonus,
        Mutations.updateSpellResistance,
        Mutations.updateGrapple,
        Mutations.updateAttacks,
        Mutations.updateSkills,
        Mutations.updateCampaign,
        Mutations.updateExperience,
        Mutations.updateItems,
        Mutations.updateFeats,
        Mutations.updateSpecialAbilities,
        Mutations.updateLanguages,
        Mutations.updateSpells,
        Mutations.updateWealth,
        Mutations.updateCarryCapacities
      ].forEach(mutation => {
        commit(mutation, character);
      });
    } catch (error) {
      NotificationService.error({
        message: error.message
      });
      console.error(error);
    }
  },
  async [Actions.updateDescription]({ commit }, description) {
    commit(Mutations.updateDescription, { description }, { meta: { sync: true } });
  },
  async [Actions.updateClasses]({ commit }, classes) {
    commit(Mutations.updateClasses, classes, { meta: { sync: true } });
  },
  async [Actions.updateSize]({ commit }, { size }) {
    commit(Mutations.updateSize, { size }, { meta: { sync: true } });
  },
  async [Actions.updateAbilityScore]({ commit }, abilityScore) {
    commit(Mutations.updateAbilityScore, abilityScore, { meta: { sync: true } });
  },
  async [Actions.updateStatus]({ commit }, status) {
    commit(Mutations.updateStatus, { status }, { meta: { sync: true } });
  },
  async [Actions.updateSpeed]({ commit }, speed) {
    commit(Mutations.updateSpeed, speed, { meta: { sync: true } });
  },
  async [Actions.updateGear]({ commit }, gear) {
    commit(Mutations.updateGear, gear, { meta: { sync: true } });
  },
  async [Actions.updateArmorClass]({ commit }, armorClass) {
    commit(Mutations.updateArmorClass, { armorClass }, { meta: { sync: true } });
  },
  async [Actions.updateDamageReduction]({ commit }, damageReduction) {
    commit(Mutations.updateDamageReduction, damageReduction, { meta: { sync: true } });
  },
  async [Actions.updateInitiative]({ commit }, initiative) {
    commit(Mutations.updateInitiative, { initiative }, { meta: { sync: true } });
  },
  async [Actions.updateSavingThrow]({ commit }, savingThrow) {
    commit(Mutations.updateSavingThrow, savingThrow, { meta: { sync: true } });
  },
  async [Actions.updateConditionModifiers]({ commit }, conditionModifiers) {
    commit(Mutations.updateConditionModifiers, conditionModifiers, { meta: { sync: true } });
  },
  async [Actions.updateBaseAttackBonus]({ commit }, baseAttackBonus) {
    commit(Mutations.updateBaseAttackBonus, baseAttackBonus, { meta: { sync: true } });
  },
  async [Actions.updateSpellResistance]({ commit }, spellResistance) {
    commit(Mutations.updateSpellResistance, spellResistance, { meta: { sync: true } });
  },
  async [Actions.updateGrapple]({ commit }, grapple) {
    commit(Mutations.updateGrapple, { grapple }, { meta: { sync: true } });
  },
  async [Actions.updateAttack]({ commit }, attack) {
    commit(Mutations.updateAttack, attack, { meta: { sync: true } });
  },
  async [Actions.updateSkill]({ commit }, skill) {
    commit(Mutations.updateSkill, { ...skill, sync: true }, { meta: { sync: true } });
  },
  async [Actions.addSkill]({ commit }, skill) {
    commit(Mutations.addSkill, skill, { meta: { sync: true } });
  },
  async [Actions.updateCampaign]({ commit }, campaign) {
    commit(Mutations.updateCampaign, { campaign }, { meta: { sync: true } });
  },
  async [Actions.updateExperience]({ commit }, experience) {
    commit(Mutations.updateExperience, { experience }, { meta: { sync: true } });
  },
  async [Actions.updateWealth]({ commit }, { wealth }) {
    commit(Mutations.updateWealth, { wealth }, { meta: { sync: true } });
  },
  async [Actions.updateCarryCapacities]({ commit }, { carryCapacities }) {
    commit(Mutations.updateCarryCapacities, { carryCapacities }, { meta: { sync: true } });
  }
}
