import { MutationTree } from 'vuex'
import { Mutations } from './mappings'
import { CharacterState } from './state'
import { IMap } from '@/domain/interfaces/IMap'

import * as Modules from '@/domain'
import ObjectUtils from 'utils/object.utils'
import { KeyAbilityType } from '@/domain/enums/key-ability-type'

export const mutations: MutationTree<CharacterState> = {
  [Mutations.newCharacter](state, newState: CharacterState = new CharacterState()) {
    ObjectUtils.extractTo(newState, state)
  },
  [Mutations.updateId](state, { _id }: { _id: string }) {
    state._id = _id
    window.history.pushState('', '', `/#/sheet/${_id}`)
  },
  [Mutations.updateDescription](state, { description }: { description: Modules.Description }) {
    ObjectUtils.extractTo(description, state.description)
  },
  [Mutations.updateClasses](state, { classes }: { classes: Modules.Classe[] }) {
    // TODO: Remake it not to "rewrite" the array.
    // Avoid unnecessary reloads on components using getters.
    state.classes = classes
  },
  [Mutations.updateSize](state, { size }: { size: Modules.Size }) {
    ObjectUtils.extractTo(size, state.size)
  },
  [Mutations.updateAbilityScores](state, { abilityScores }: { abilityScores: IMap<Modules.AbilityScore> }) {
    // Get abilityScores name
    // Map it to abilityScore
    Object.keys(abilityScores).map(abilityScoreName => {
      state.abilityScores[abilityScoreName] = new Modules.AbilityScore(abilityScores[abilityScoreName])
    })
  },
  [Mutations.updateAbilityScore](state, abilityScore: Modules.AbilityScore) {
    const stateAbilityScore = state.abilityScores[abilityScore.name]
    ObjectUtils.extractTo(abilityScore, stateAbilityScore)
  },
  [Mutations.updateStatus](state, { status }: { status: Modules.Status }) {
    state.status = new Modules.Status(status);
  },
  [Mutations.updateSpeed](state, { speed }: { speed: string }) {
    state.speed = speed
  },
  [Mutations.updateGear](state, { gear }: { gear: Modules.Gear }) {
    ObjectUtils.extractTo(gear.armor, state.gear.armor)
    ObjectUtils.extractTo(gear.shield, state.gear.shield)
    gear.protectiveItems.forEach((protectiveItem, index) => {
      ObjectUtils.extractTo(protectiveItem, state.gear.protectiveItems[index])
    })
  },
  [Mutations.updateKeyScore](state, { name = '', keyAbility = KeyAbilityType.NONE }: { name: string, keyAbility: KeyAbilityType }) {
    state.keyAbilityScores[name] = keyAbility
  },
  [Mutations.updateArmorClass](state, { armorClass }: { armorClass: Modules.ArmorClass }) {
    ObjectUtils.extractTo(armorClass, state.armorClass)
  },
  [Mutations.updateDamageReduction](state, { damageReduction }: { damageReduction: string }) {
    state.damageReduction = damageReduction
  },
  [Mutations.updateInitiative](state, { initiativeModifier }: { initiativeModifier: number }) {
    state.initiativeModifier = initiativeModifier;
  },
  [Mutations.updateSavingThrows](state, { savingThrows }: { savingThrows: IMap<Modules.SavingThrow> }) {
    Object.keys(savingThrows).map(savingThrowName => {
      state.savingThrows[savingThrowName] = new Modules.SavingThrow(savingThrows[savingThrowName])
    })
  },
  [Mutations.updateSavingThrow](state, savingThrow: Modules.SavingThrow) {
    const stateSavingThrow = state.savingThrows[savingThrow.name]
    ObjectUtils.extractTo(savingThrow, stateSavingThrow)
  },
  [Mutations.updateConditionModifiers](state, { conditionModifiers }: { conditionModifiers: string }) {
    state.conditionModifiers = conditionModifiers
  },
  [Mutations.updateBaseAttackBonus](state, { baseAttackBonus }: { baseAttackBonus: number[] }) {
    state.baseAttackBonus = baseAttackBonus
  },
  [Mutations.updateSpellResistance](state, { spellResistance }: { spellResistance: string }) {
    state.spellResistance = spellResistance
  },
  [Mutations.updateGrapple](state, { grappleModifier }: { grappleModifier: number }) {
    state.grappleModifier = grappleModifier
  },
  [Mutations.updateAttacks](state, { attacks = [] }: { attacks: Modules.Attack[] }) {
    state.attacks = attacks.map(attack => new Modules.Attack(attack));
  },
  [Mutations.updateAttack](state, { index, attack }: { index: number, attack: Modules.Attack }) {
    const stateAttack = state.attacks[index]
    ObjectUtils.extractTo(attack, stateAttack)
  },
  [Mutations.updateSkills](state, { skills = [] }: { skills: Modules.CharacterSkill[] }) {
    state.skills = skills;
  },
  [Mutations.updateSkill](state, updated: Modules.CharacterSkill) {
    const indexOf = state.skills.map(skill => skill._id).indexOf(updated._id);
    ObjectUtils.extractTo(updated, state.skills[indexOf]);
  },
  [Mutations.updateCampaign](state, { campaign }: { campaign: string }) {
    state.campaign = campaign
  },
  [Mutations.updateExperience](state, { experience }: { experience: number }) {
    state.experience = experience
  },
  [Mutations.updateArmor](state, armor: Modules.Armor) {
    ObjectUtils.extractTo(armor, state.gear.armor)
  },
  [Mutations.updateShield](state, shield: Modules.Shield) {
    ObjectUtils.extractTo(shield, state.gear.shield)
  },
  [Mutations.updateProtectiveItem](state, { index, protectiveItem }: { index: number, protectiveItem: Modules.ProtectiveItem }) {
    const stateProtectiveItem = state.gear.protectiveItems[index]
    ObjectUtils.extractTo(protectiveItem, stateProtectiveItem)
  },
  [Mutations.updateItems](state, { items }: { items: Modules.Item[] }) {
    state.items = items.map(item => new Modules.Item(item));
  },
  [Mutations.updateItem](state, { index, item }: { index: number, item: Modules.Item }) {
    const stateItem = state.items[index]
    ObjectUtils.extractTo(item, stateItem)
  },
  [Mutations.updateCarryCapacities](state, { carryCapacities }: { carryCapacities: Modules.CarryCapacities }) {
    Object.keys(carryCapacities)
      .forEach((carryCapacityName) => {
        const carryCapacity = carryCapacities[carryCapacityName]
        const stateCarryCapacity = state.carryCapacities[carryCapacityName]
        ObjectUtils.extractTo(carryCapacity, stateCarryCapacity)
      })
  },
  [Mutations.updateCarryCapacity](state, { index, carryCapacity }: { index: number, carryCapacity: Modules.CarryCapacity }) {
    const stateCarryCapacity = state.carryCapacities[index]
    ObjectUtils.extractTo(carryCapacity, stateCarryCapacity)
  },
  [Mutations.updateCoin](state, { index, coin }: { index: number, coin: Modules.Coin }) {
    const stateCoin = state.wealth.coins[index]
    ObjectUtils.extractTo(coin, stateCoin)
  },
  [Mutations.updateCoins](state, { wealth: { coins } }: { wealth: Modules.Wealth }) {
    Object.keys(coins)
      .forEach((coinName) => {
        const coin = coins[coinName]
        const stateCoin = state.wealth.coins[coinName]
        ObjectUtils.extractTo(coin, stateCoin)
      })
  },
  async [Mutations.updateTreasure](state, { wealth: { treasure } }: { wealth: Modules.Wealth }) {
    state.wealth.treasure = treasure
  },

  [Mutations.updateFeats](state, { feats }: { feats: Modules.Feat[] }) {
    state.feats = feats.map(feat => feat)
  },
  [Mutations.updateSpecialAbilities](state, { specialAbilities }: { specialAbilities: Modules.SpecialAbility[] }) {
    state.specialAbilities = specialAbilities.map(specialAbility => specialAbility)
  },
  [Mutations.updateLanguages](state, { languages }: { languages: Modules.Language[] }) {
    state.languages = languages.map(language => language)
  },
  [Mutations.updateSpells](state, { spells }: { spells: Modules.Spell[] }) {
    state.spells = spells.map(spell => spell)
  },

  [Mutations.addSkill](state, skill: Modules.CharacterSkill) {
    state.skills.push(skill)
  },

  [Mutations.addFeat](state, feat: Modules.Feat) {
    state.feats.push(feat)
  },
  [Mutations.removeFeat](state, feat: Modules.Feat) {
    const index = state.feats.map(feat => feat._id).indexOf(feat._id)
    state.feats.splice(index, 1)
  },

  [Mutations.addSpecialAbility](state, specialAbility: Modules.SpecialAbility) {
    state.specialAbilities.push(specialAbility)
  },
  [Mutations.removeSpecialAbility](state, specialAbility: Modules.SpecialAbility) {
    const index = state.specialAbilities.map(specialAbility => specialAbility._id).indexOf(specialAbility._id)
    state.specialAbilities.splice(index, 1)
  },

  [Mutations.addLanguage](state, language: Modules.Language) {
    state.languages.push(language)
  },
  [Mutations.removeLanguage](state, language: Modules.Language) {
    const index = state.languages.map(language => language._id).indexOf(language._id)
    state.languages.splice(index, 1)
  },

  [Mutations.addSpell](state, spell: Modules.Spell) {
    state.spells.push(spell)
  },
  [Mutations.removeSpell](state, spell: Modules.Spell) {
    const index = state.spells.map(spell => spell._id).indexOf(spell._id)
    state.spells.splice(index, 1)
  },
  [Mutations.updateDomainSchool](state, domainSchool: string) {
    state.domainSchool = domainSchool
  }
}

export default mutations
