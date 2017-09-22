import axios from 'axios';
import spellModule from 'Modules/spell.module';
import Constants from 'Constants';
import guid from 'Utils/guid';

export default {
    spellsOffline: {

    },
    new: function () {
        return new spellModule.spell({});
    },
    toCharacterspell: function(spell){
        // Change it to become a character spell.
        spell._id = guid.generate();
        return new spellModule.spell(spell);
    },
    getAll: function () {
        return axios.get(Constants.API_URL + '/spells').then(response => {
            return response.data;
        });
    },
    saveOrUpdate: function (spell) {
        if (spell._id) {
            return axios.put(Constants.API_URL + '/spells', { spell }).then(response => {
                return response.data;
            }, reason => {
                return this.spellsOffline[spell._id] = spell;
            });
        } else {
            return axios.post(Constants.API_URL + '/spells', { spell }).then(response => {
                return response.data;
            }, reason => {
                spell._id = generateGuid();
                return this.spellsOffline[spell._id] = spell;
            });
        }
    }
}