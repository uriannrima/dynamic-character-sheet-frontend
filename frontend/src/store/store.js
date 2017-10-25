import Vue from 'vue';
import Vuex from 'vuex';
import CharacterModule from 'Modules/character.module';
import Actions from './actions.constants'

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict: true,
    state: {
        character: {}
    },
    getters: {
        character: state => {
            return CharacterModule.Character(state.character);
        }
    },
    mutations: {
        [Actions.Character.Replace](state, { character }) {
            state.character = character;
        }
    },
    actions: {
        replaceCharacter: ({ dispatch, commit, state }, payload) => {
            commit(Actions.Character.Replace, payload);
        }
    }
});
