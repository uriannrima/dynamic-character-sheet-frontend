export default {
  getAbilityScore: state => (scoreName) => {
    return state.abilityScores[scoreName];
  },
  /**
   * Getters "getModifier" and "getTempModifier" are here to avoid errors on Vuex DevTools Time Travel.
   * Since it doesn't save the object with it's methods.
   */
  getModifier: () => (abilityScore) => {
    return Math.floor((abilityScore.value - 10) / 2);
  },
  getTempModifier: () => (abilityScore) => {
    return Math.floor((abilityScore.tempValue - 10) / 2);
  },
  getClasses: state => {
    return state.classes
      .filter(classe => classe.name)
      .map(classe => `${classe.name} (${classe.level})`)
      .reduce((reducer, classe) => reducer === '' ? classe : reducer + ', ' + classe, '');
  },
  getSize: state => {
    return state.size.name;
  },
  getArmorBonus: state => {
    return state.gear.armor.acBonus;
  },
  getShieldBonus: state => {
    return state.gear.shield.acBonus;
  },
  getArmorKeyScore: state => {
    return state.abilityScores[state.armorKeyAbilityScore];
  },
  getTotalArmor: (state, getters) => {
    return 10 +
      getters.getArmorBonus +
      getters.getShieldBonus +
      getters.getArmorKeyScore.tempModifier +
      state.size.modifier +
      state.armorClass.naturalArmor +
      getters.getDeflectionBonus +
      state.armorClass.miscModifier;
  },
  getTouchArmor: (state, getters) => {
    return 10 +
      getters.getArmorKeyScore.tempModifier +
      state.size.modifier +
      getters.getDeflectionBonus +
      state.armorClass.miscModifier;
  },
  getFlatFooted: (state, getters) => {
    return 10 +
      getters.getArmorBonus +
      getters.getShieldBonus +
      state.size.modifier +
      state.armorClass.naturalArmor +
      getters.getDeflectionBonus +
      state.armorClass.miscModifier;
  },
  getDeflectionBonus: state => {
    return state.gear.protectiveItems.reduce((acc, item) => acc + item.acBonus, 0);
  }
}
