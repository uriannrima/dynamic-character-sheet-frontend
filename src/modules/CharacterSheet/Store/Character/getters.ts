import { GetterTree } from 'vuex'
import { CharacterState } from '@/modules/CharacterSheet/Store/Character/state'
import { RootState } from '@/store/types'

export const getters: GetterTree<CharacterState, RootState> = {
  getAbilityScore: state => (scoreName: string) => {
    return state.abilityScores[scoreName]
  },
  getClasses: state => {
    return state.classes
      .filter(classe => classe.name)
      .map(classe => `${classe.name} (${classe.level})`)
      .reduce((reducer, classe) => reducer === '' ? classe : reducer + ', ' + classe, '')
  },
  getSize: state => {
    return state.size.name
  },
  getArmorBonus: state => {
    return state.gear.armor.acBonus
  },
  getShieldBonus: state => {
    return state.gear.shield.acBonus
  },
  getArmorKeyScore: state => {
    return state.abilityScores[state.keyAbilityScores.armor]
  },
  getInitiativeKeyScore: state => {
    return state.abilityScores[state.keyAbilityScores.initiative]
  },
  getGrappleKeyScore: state => {
    return state.abilityScores[state.keyAbilityScores.grapple]
  },
  getTotalArmor: (state, getters) => {
    return 10 +
      getters.getArmorBonus +
      getters.getShieldBonus +
      getters.getArmorKeyScore.modifier +
      state.size.modifier +
      state.armorClass.naturalArmor +
      getters.getDeflectionBonus +
      state.armorClass.miscModifier
  },
  getTouchArmor: (state, getters) => {
    return 10 +
      getters.getArmorKeyScore.modifier +
      state.size.modifier +
      getters.getDeflectionBonus +
      state.armorClass.miscModifier
  },
  getFlatFooted: (state, getters) => {
    return 10 +
      getters.getArmorBonus +
      getters.getShieldBonus +
      state.size.modifier +
      state.armorClass.naturalArmor +
      getters.getDeflectionBonus +
      state.armorClass.miscModifier
  },
  getDeflectionBonus: state => {
    return state.gear.protectiveItems.reduce((acc, item) => acc + item.acBonus, 0)
  },
  getTotalInitiative: function (state, getters) {
    return getters.getInitiativeKeyScore.modifier + state.initiativeModifier
  },
  getBaseAttackBonus: state => {
    return state.baseAttackBonus.join('/')
  },
  getGrappleTotal: (state, getters) => {
    return state.baseAttackBonus.map(bab => {
      return bab + getters.getGrappleKeyScore.modifier + state.size.grappleBonus + state.grappleModifier
    }).join('/')
  },
  getGearPenalty: (state) => {
    const { armor, shield } = state.gear
    return armor.checkPenalty + shield.checkPenalty
  },
  getTotalWeight: (state) => {
    var gearWeight = 0
    var { armor, shield, protectiveItems } = state.gear
    if (armor) gearWeight += armor.weight
    if (shield) gearWeight += shield.weight
    if (protectiveItems) gearWeight = protectiveItems.reduce((acc, item) => acc + item.weight, gearWeight)
    return state.items.reduce((acc, item) => {
      if (typeof item.weight !== 'number') return acc
      return acc + item.weight
    }, gearWeight).toPrecision(2)
  },
  getSpellFailure: (state) => {
    var spellFailure = 0
    var { armor, shield } = state.gear
    if (armor) spellFailure += armor.spellFailure
    if (shield) spellFailure += shield.spellFailure
    return spellFailure
  }
}

export default getters
