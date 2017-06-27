import axios from 'axios';
import characterModel from 'Models/character.model';
console.log(characterModel);

export default {
    apiUrl: 'http://localhost:3003/',
    new: function () {
        return new characterModel({});
    },
    get: function (id) {
        return axios.get('http://localhost:3003/characters/' + id).then(response => {
            return new characterModel(response.data);
        });
    },
    saveOrUpdate: function (character) {
        if (character._id) {
            return axios.put('http://localhost:3003/characters', { character }).then(response => {
                return response.data;
            });
        } else {
            return axios.post('http://localhost:3003/characters', { character }).then(response => {
                return response.data;
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