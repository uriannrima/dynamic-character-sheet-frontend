import characterModel from 'Models/character.model';

var characters = [
    new characterModel({ name: "Buck Anvilhead", playerName: "Peres" })
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