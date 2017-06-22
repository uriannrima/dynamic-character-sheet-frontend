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

window.characters = characters;

export default {
    get: function (id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(characters[0]);
            }, 200);
        });
    },
    update: function (character) {
        // Be updated by char ability score.
        for (var index = 0; index < character.abilityScores.length; index++) {
            var abilityScore = character.abilityScores[index];
            abilityScore.update(character);
        }
    }
}