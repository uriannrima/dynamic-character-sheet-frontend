import axios from 'axios';
import characterModel from 'Models/character.model';
import characterClass from 'Models/characterClass.model';
import ClassService from 'Services/class.service';

var characters = [
    new characterModel(
        {
            name: "Buck Anvilhead",
            playerName: "Peres",
            classes: [
                new characterClass({
                    name: "Fighter",
                    level: 1
                })
            ]
        })
];

export default {
    apiUrl: 'http://localhost:3003/api',
    new: function () {
        return new characterModel({});
    },
    get: function (id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(characters[0]);
            }, 200);
        });
    },
    saveOrUpdate: function (character) {
        if (character.id) {
            return axios.put('http://localhost:3003/api/characters', { character }).then(response => {
                return response.data;
            });
        } else {
            return axios.post('http://localhost:3003/api/characters', { character }).then(response => {
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
    }
}