import Actions from './actions.constants'
import CharacterModule from 'Modules/character.module';

export default {
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
        },
        [Actions.Character.AddSpell](state, { model }) {
            state.character.spells.push(model);
        },
        [Actions.Character.AddFeat](state, { model }) {
            state.character.feats.push(model);
        },
        [Actions.Character.AddSkill](state, { model }) {
            state.character.skills.push(model);
        }
    },
    actions: {
        [Actions.Character.Replace]: ({ dispatch, commit, state }, payload) => {
            commit(Actions.Character.Replace, payload);
        },
        [Actions.Character.AddSpell]: ({ dispatch, commit, state }, payload) => {
            commit(Actions.Character.AddSpell, payload);
        },
        [Actions.Character.AddSkill]: ({ dispatch, commit, state }, payload) => {
            commit(Actions.Character.AddSkill, payload);
        },
        [Actions.Character.AddFeat]: ({ dispatch, commit, state }, payload) => {
            commit(Actions.Character.AddFeat, payload);
        }
    }
}
