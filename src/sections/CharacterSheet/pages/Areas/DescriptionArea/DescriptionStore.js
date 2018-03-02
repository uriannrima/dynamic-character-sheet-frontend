import ObjectUtils from 'Utils/object.utils.js';

export default {
  namespaced: true,
  state: {
    name: "",
    playerName: "",
    classes: [],
    race: "",
    alignment: "",
    deity: "",
    size: {},
    age: "",
    gender: "",
    height: "",
    weight: "",
    eyes: "",
    hair: "",
    skin: ""
  },
  getters: {
    classes: (state, getters) => {
      return state.classes.map(classe => {
        if (!classe.name || !classe.level) return "";
        return classe.name + " (" + classe.level + ")";
      });
    }
  },
  actions: {
    async loadStateAsync({ commit, state }, payload) {
      commit('loadState', payload);
    }
  },
  mutations: {
    loadState(state, payload) {
      ObjectUtils.extractTo(payload, state, Object.keys(state));
    },
    updateClasses: (state, { classes }) => {
      state.classes = [];
      const classesValues = classes.split(",");
      classesValues.forEach(classesValue => {
        // If empty character
        if (classesValue.trim() === "") return;
        // Clear whitespaces
        var classLevel = classesValue.replace(/ /g, "");
        // Regex to get level
        var levelRegex = /\(([^)]+)\)/;
        // Get level data,
        var levelData = levelRegex.exec(classLevel);
        // Extract level from data
        var level = levelData && levelData.length > 1 ? levelData[1] : 1;
        // Remove level from classes.
        var classOnly = classLevel.replace(levelRegex, "");
        state.classes.push({
          name: classOnly.trim(),
          level: level
        });
      });
    }
  }
};
