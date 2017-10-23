import axios from 'axios';
import characterModule from 'Modules/character.module';
import Constants from 'Constants';

export default {
    charactersOffline: {

    },
    new: function () {
        return new characterModule.character({});
    },
    load: function (characterData) {
        return new characterModule.character(characterData);
    },
    getAll: function (id) {
        return axios.get(Constants.API_URL + '/characters/').then(response => {
            return response.data.map(characterData => {
                return new characterModule.character(characterData);
            });
        }, reason => {
            return this.charactersOffline[_id];
        });
    },
    get: function (id) {
        return axios.get(Constants.API_URL + '/characters/' + id).then(response => {
            return new characterModule.character(response.data);
        }, reason => {
            return this.charactersOffline[_id];
        });
    },
    saveOrUpdate: function (character) {
        if (character._id) {
            return axios.put(Constants.API_URL + '/characters', { character }).then(response => {
                return response.data;
            }, reason => {
                return this.charactersOffline[character._id] = character;
            });
        } else {
            return axios.post(Constants.API_URL + '/characters', { character }).then(response => {
                return response.data;
            }, reason => {
                return this.charactersOffline[character._id] = character;
            });
        }
    },
    resetSkills: function (character) {
        return axios.put(Constants.API_URL + '/characters/skill/reset', { character }).then(response => {
            return response.data;
        });
    },
    update: function (character) {
        // Be updated by char ability score.
        for (var index = 0; index < character.abilityScores.length; index++) {
            var abilityScore = character.abilityScores[index];
            abilityScore.update(character);
        }

        character.grapple.baseAttackBonus = character.baseAttackBonus;
    },
    addFeat: function (character, feat) {
        return axios.post(Constants.API_URL + '/characters/feat', { character, feat }).then(response => {
            return response.data;
        }, reason => {
            console.log(reason);
        });
    },
    removeFeat: function (character, featId) {
        return axios.put(Constants.API_URL + '/characters/feat/' + featId, { character }).then(response => {
            return response.data;
        }, reason => {
            console.log(reason);
        });
    }
}
