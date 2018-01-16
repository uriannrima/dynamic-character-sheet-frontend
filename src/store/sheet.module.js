import Actions from './actions.constants'
import * as CharacterModule from 'Modules/character.module';

export var Utils = {
    removeFromModel(model, arrayName, removed, field = '_id') {
        model[arrayName] = model[arrayName].filter(m => {
            return (m[field] !== removed[field] || (removed.subValue && JSON.stringify(removed.subValue) !== JSON.stringify(m.subValue)));
        });
    },
    addToModel(model, arrayName, added) {
        model[arrayName].push(added);
    },
    updateOnModel(model, arrayName, updated, field = '_id') {
        model[arrayName].splice(model[arrayName].findIndex(m => m[field] === updated[field]), 1, updated);
    },
    setExpression(previous, tree, value) {
        if (tree.length === 1) {
            previous[tree.shift()] = value;
        } else {
            this.setExpression(previous[tree.shift()], tree, value);
        }
    },
    getExpression(previous, tree) {
        if (tree.length === 1) return previous[tree.shift()];
        return this.getExpression(previous[tree.shift()], tree);
    }
}

/** Character Sheet State. */
const state = {
    character: {}
};

/** Character Sheet Getters. */
const getters = {
    character: state => {
        return CharacterModule.Character(state.character);
    }
};

/** Character Sheet Mutations. */
const mutations = {
    /** Character Replace */
    [Actions.Character.Replace](state, { character }) {
        state.character = character;
    },
    /** Generic mutations */
    [Actions.Character.Add.Generic](state, { arrayName, model }) {
        Utils.addToModel(state.character, arrayName, model);
    },
    [Actions.Character.Remove.Generic](state, { arrayName, model, field }) {
        Utils.removeFromModel(state.character, arrayName, model, field);
    },
    [Actions.Character.Update.Generic](state, { arrayName, model, field }) {
        Utils.updateOnModel(state.character, arrayName, model, field);
    },
    /** Simple Mutations */
    [Actions.Simple](state, { expression, value }) {
        var tree = expression.split('.');
        Utils.setExpression(state, tree, value);
    },
    /** Updates */
    [Actions.Character.Update.AbilityScore](state, { updated }) {
        var { abilityScores } = state.character;
        var index = abilityScores.findIndex(score => score.name === updated.name);
        abilityScores.splice(index, 1, updated);
    },
    /** Add Mutations */
    [Actions.Character.Add.Spell](state, { model }) {
        Utils.addToModel(state.character, 'spells', model);
    },
    [Actions.Character.Add.Feat](state, { model }) {
        Utils.addToModel(state.character, 'spells', model);
    },
    [Actions.Character.Add.Skill](state, { model }) {
        Utils.addToModel(state.character, 'spells', model);
    },
    /** Remove Mutations */
    [Actions.Character.Remove.Spell](state, { model }) {
        Utils.removeFromModel(state.character, 'spells', model);
    },
    [Actions.Character.Remove.Feat](state, { model }) {
        Utils.removeFromModel(state.character, 'feats', model);
    },
    [Actions.Character.Remove.Skill](state, { model }) {
        Utils.removeFromModel(state.character, 'skills', model);
    }
};

/** Character Sheet Actions. */
const actions = {
    /** Character Replace */
    [Actions.Character.Replace]: ({ dispatch, commit, state }, payload) => {
        commit(Actions.Character.Replace, payload);
    },
    /** Generic actions */
    [Actions.Character.Add.Generic]: ({ dispatch, commit, state }, payload) => {
        commit(Actions.Character.Add.Generic, payload);
    },
    [Actions.Character.Remove.Generic]: ({ dispatch, commit, state }, payload) => {
        commit(Actions.Character.Remove.Generic, payload);
    },
    [Actions.Character.Update.Generic]: ({ dispatch, commit, state }, payload) => {
        commit(Actions.Character.Update.Generic, payload);
    },
    /** Updates */
    [Actions.Character.Update.AbilityScore]: ({ dispatch, commit, state }, payload) => {
        commit(Actions.Character.Update.AbilityScore, payload);
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
};

window.sheetStore = {
    state,
    getters,
    mutations,
    actions
}

export default window.sheetStore;
