import axios from 'axios';
import SpellModule from 'Modules/spell.module';
import Constants from 'Constants';

export default {
    spellsOffline: {

    },
    new: function (data = {}) {
        return new SpellModule.Spell(data);
    },
    toCharacterspell: function (spell) {
        // Change it to become a character spell.
        return new SpellModule.Spell(spell);
    },
    getAll: function () {
        return axios.get(Constants.API_URL + '/spells').then(response => {
            return response.data;
        });
    },
    getAllDescriptors: async function () {
        return SpellModule.descriptors;
    },
    getAllComponents: async function () {
        return SpellModule.components;
    },
    getAllCastingTimes: async function () {
        return SpellModule.castingTimes;
    },
    getAllRanges: async function () {
        return SpellModule.ranges;
    },
    getAllEffects: async function () {
        return SpellModule.effects;
    },
    getAllDurations: async function () {
        return SpellModule.durations;
    },
    getAllSavingThrowResolve: async function () {
        return SpellModule.savingThrowResolve;
    },
    saveOrUpdate: function (spell) {
        if (spell._id) {
            return axios.put(Constants.API_URL + '/spells', { spell }).then(response => {
                return response.data;
            });
        } else {
            return axios.post(Constants.API_URL + '/spells', { spell }).then(response => {
                return response.data;
            });
        }
    }
}
