export default {
  getModifier: state => (abilityScore) => {
    return Math.floor((abilityScore.value - 10) / 2);
  },
  getTempModifier: state => (abilityScore) => {
    return Math.floor((abilityScore.tempValue - 10) / 2);
  }
}
