import { ActionTree } from 'vuex'

import * as Modules from '@/domain'

import { CharacterState } from '@/pages/CharacterSheet/Store/Character/state'
import { RootState } from '@/store/types'
import { Actions, Mutations } from '@/pages/CharacterSheet/Store/Character/mappings'

import CharacterService from '@/services/domain/CharacterService'
import ChannelService from '@/services/domain/ChannelService'

import SkillService from '@/services/domain/SkillService'

declare module 'vuex' {
  interface CommitOptions {
    silent?: boolean;
    root?: boolean;
    meta: any;
  }
}

export const actions: ActionTree<CharacterState, RootState> = {
  async [Actions.connect](_, characterId) {
    // Ask for the server to connect to character channel.
    ChannelService.create(['characters', characterId])
  },
  async [Actions.saveCharacter]({ commit, state }) {
    const character = await CharacterService.saveOrUpdate(state)
    commit(Mutations.updateId, character)
  },
  async [Actions.newCharacter]({ commit }) {
    const newState = new CharacterState()
    const skills = await SkillService.getDefaultSkills() as Modules.Skill[]
    newState.skills = skills.map(skill => Modules.CharacterSkill.createFromSkill(skill));
    commit(Mutations.newCharacter, newState)
  },
  async [Actions.resetSkills]({ commit }) {
    const defaultSkills = await SkillService.getDefaultSkills() as Modules.Skill[]
    const skills = defaultSkills.map(skill => Modules.CharacterSkill.createFromSkill(skill));
    commit(Mutations.updateSkills, { skills })
  },
  async [Actions.loadCharacter]({ commit }, characterId) {
    try {
      const character = await CharacterService.getById(characterId);

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
        Mutations.updateCarryCapacities,
        Mutations.updateCoins,
        Mutations.updateTreasure,
        Mutations.updateFeats,
        Mutations.updateSpecialAbilities,
        Mutations.updateLanguages,
        Mutations.updateSpells
      ].forEach(mutation => {
        commit(mutation, character)
      })
    } catch (error) {
      // NotificationService.error({
      //   message: error.message
      // });
      console.error(error)
    }
  },
  async [Actions.updateDescription]({ commit }, description) {
    commit(Mutations.updateDescription, { description }, { meta: { sync: true } })
  },
  async [Actions.updateClasses]({ commit }, classes) {
    commit(Mutations.updateClasses, classes, { meta: { sync: true } })
  },
  async [Actions.updateSize]({ commit }, { size }) {
    commit(Mutations.updateSize, { size }, { meta: { sync: true } })
  },
  async [Actions.updateAbilityScore]({ commit }, abilityScore) {
    commit(Mutations.updateAbilityScore, abilityScore, { meta: { sync: true } })
  },
  async [Actions.updateStatus]({ commit }, status) {
    commit(Mutations.updateStatus, { status }, { meta: { sync: true } })
  },
  async [Actions.updateSpeed]({ commit }, speed) {
    commit(Mutations.updateSpeed, speed, { meta: { sync: true } })
  },
  async [Actions.updateGear]({ commit }, gear) {
    commit(Mutations.updateGear, gear, { meta: { sync: true } })
  },
  async [Actions.updateArmorClass]({ commit }, armorClass) {
    commit(Mutations.updateArmorClass, { armorClass }, { meta: { sync: true } })
  },
  async [Actions.updateDamageReduction]({ commit }, damageReduction) {
    commit(Mutations.updateDamageReduction, damageReduction, { meta: { sync: true } })
  },
  async [Actions.updateInitiative]({ commit }, initiativeModifier) {
    commit(Mutations.updateInitiative, { initiativeModifier }, { meta: { sync: true } })
  },
  async [Actions.updateSavingThrow]({ commit }, savingThrow) {
    commit(Mutations.updateSavingThrow, savingThrow, { meta: { sync: true } })
  },
  async [Actions.updateConditionModifiers]({ commit }, conditionModifiers) {
    commit(Mutations.updateConditionModifiers, conditionModifiers, { meta: { sync: true } })
  },
  async [Actions.updateBaseAttackBonus]({ commit }, baseAttackBonus) {
    commit(Mutations.updateBaseAttackBonus, baseAttackBonus, { meta: { sync: true } })
  },
  async [Actions.updateSpellResistance]({ commit }, spellResistance) {
    commit(Mutations.updateSpellResistance, spellResistance, { meta: { sync: true } })
  },
  async [Actions.updateGrapple]({ commit }, grapple) {
    commit(Mutations.updateGrapple, { grapple }, { meta: { sync: true } })
  },
  async [Actions.updateAttack]({ commit }, attack) {
    commit(Mutations.updateAttack, attack, { meta: { sync: true } })
  },
  async [Actions.updateSkill]({ commit }, skill) {
    commit(Mutations.updateSkill, { ...skill, sync: true }, { meta: { sync: true } })
  },
  async [Actions.addSkill]({ commit }, skill) {
    commit(Mutations.addSkill, skill, { meta: { sync: true } })
  },
  async [Actions.updateCampaign]({ commit }, campaign) {
    commit(Mutations.updateCampaign, campaign, { meta: { sync: true } })
  },
  async [Actions.updateExperience]({ commit }, experience) {
    commit(Mutations.updateExperience, experience, { meta: { sync: true } })
  },
  async [Actions.updateArmor]({ commit }, armor) {
    commit(Mutations.updateArmor, armor, { meta: { sync: true } })
  },
  async [Actions.updateShield]({ commit }, shield) {
    commit(Mutations.updateShield, shield, { meta: { sync: true } })
  },
  async [Actions.updateProtectiveItem]({ commit }, protectiveItem) {
    commit(Mutations.updateProtectiveItem, protectiveItem, { meta: { sync: true } })
  },
  async [Actions.updateItem]({ commit }, item) {
    commit(Mutations.updateItem, item, { meta: { sync: true } })
  },
  async [Actions.updateCarryCapacity]({ commit }, carryCapacity) {
    commit(Mutations.updateCarryCapacity, carryCapacity, { meta: { sync: true } })
  },
  async [Actions.updateCoin]({ commit }, coin) {
    commit(Mutations.updateCoin, coin, { meta: { sync: true } })
  },
  async [Actions.updateTreasure]({ commit }, treasure) {
    commit(Mutations.updateTreasure, { wealth: { treasure } }, { meta: { sync: true } })
  }
}

export default actions
