import axios from 'axios';
import characterModel from 'Models/character.model';

var generateGuid = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export default {
    charactersOffline: {

    },
    apiUrl: 'http://localhost:5000/api',
    new: function () {
        return new characterModel({});
    },
    load: function (characterData) {
        return new characterModel(characterData);
    },
    get: function (id) {
        return axios.get(this.apiUrl + '/characters/' + id).then(response => {
            return new characterModel(response.data);
        }, reason => {
            return this.charactersOffline[_id];
        });
    },
    saveOrUpdate: function (character) {
        if (character._id) {
            return axios.put(this.apiUrl + '/characters', { character }).then(response => {
                return response.data;
            }, reason => {
                return this.charactersOffline[character._id] = character;
            });
        } else {
            return axios.post(this.apiUrl + '/characters', { character }).then(response => {
                return response.data;
            }, reason => {
                character._id = generateGuid();
                return this.charactersOffline[character._id] = character;
            });
        }
    },
    update: function (character) {
        // Be updated by char ability score.
        for (var index = 0; index < character.abilityScores.length; index++) {
            var abilityScore = character.abilityScores[index];
            abilityScore.update(character);
        }

        character.grapple.baseAttackBonus = character.baseAttackBonus;
    }
}