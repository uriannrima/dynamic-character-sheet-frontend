import Actions from './actions.constants'
import CharacterModule from 'Modules/character.module';

const utils = {
    removeFromCharacter(character, arrayName, model) {
        character[arrayName] = character[arrayName].filter(m => {
            return (m._id !== model._id || (model.subValue && model.subValue !== m.subValue));
        });
    }
}

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
        /** Add Mutations */
        [Actions.Character.Add.Spell](state, { model }) {
            state.character.spells.push(model);
        },
        [Actions.Character.Add.Feat](state, { model }) {
            state.character.feats.push(model);
        },
        [Actions.Character.Add.Skill](state, { model }) {
            state.character.skills.push(model);
        },
        /** Remove Mutations */
        [Actions.Character.Remove.Spell](state, { model }) {
            utils.removeFromCharacter(state.character, 'spells', model);
        },
        [Actions.Character.Remove.Feat](state, { model }) {
            utils.removeFromCharacter(state.character, 'feats', model);
        },
        [Actions.Character.Remove.Skill](state, { model }) {
            utils.removeFromCharacter(state.character, 'skills', model);
        }
    },
    actions: {
        [Actions.Character.Replace]: ({ dispatch, commit, state }, payload) => {
            commit(Actions.Character.Replace, payload);
        },
        /** Add Actions */
        [Actions.Character.Add.Spell]: ({ dispatch, commit, state }, payload) => {
            commit(Actions.Character.Add.Spell, payload);
        },
        [Actions.Character.Add.Skill]: ({ dispatch, commit, state }, payload) => {
            commit(Actions.Character.Add.Skill, payload);
        },
        [Actions.Character.Add.Feat]: ({ dispatch, commit, state }, payload) => {
            commit(Actions.Character.Add.Feat, payload);
        },
        /** Remove Actions */
        [Actions.Character.Remove.Spell]: ({ dispatch, commit, state }, payload) => {
            commit(Actions.Character.Remove.Spell, payload);
        },
        [Actions.Character.Remove.Skill]: ({ dispatch, commit, state }, payload) => {
            commit(Actions.Character.Remove.Skill, payload);
        },
        [Actions.Character.Remove.Feat]: ({ dispatch, commit, state }, payload) => {
            commit(Actions.Character.Remove.Feat, payload);
        }
    }
}
