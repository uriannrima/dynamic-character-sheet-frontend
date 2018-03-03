import Mappings from './mappings';
import Vue from 'vue';
// import ObjectUtils1 from 'Utils/object.utils.js';

export default {
  [Mappings.Mutations.loadCharacter](state, character) {
    state._id = character._id;
    character.abilityScores.map(aScore => {
      Vue.set(state.abilitiesScore, aScore.name, aScore);
    });
  }
}
