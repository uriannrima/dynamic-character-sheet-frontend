import characterModel from 'Models/character.model';
import characterClass from 'Models/characterClass.model';

var characters = [
    new characterModel(
        {
            name: "Buck Anvilhead",
            playerName: "Peres",
            classes: [
                new characterClass({
                    name: "Warrior",
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
    }
}