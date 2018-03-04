export default {
  getModifier: state => (abilityScore) => {
    return Math.floor((abilityScore.value - 10) / 2);
  },
  getTempModifier: state => (abilityScore) => {
    return Math.floor((abilityScore.tempValue - 10) / 2);
  },
  getClasses: state => {
    return state.classes.map(classe => {
      if (!classe.name || !classe.level) return "";
      return classe.name + " (" + classe.level + ")";
    });
  },
  getSize: state => {
    return state.size.name;
  }
}
