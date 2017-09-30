import axios from 'axios';
import sizeModule from 'Modules/size.module';
import Constants from 'Constants';

export default {
    getAll: function () {
        return axios.get(Constants.API_URL + '/sizes/').then(response => {
            return response.data.map(sizeData => {
                return new sizeModule.size(sizeData);
            });
        });
    },
    getByName: function (sizeName) {
        return ALL_SIZES.filter(size => size.name === sizeName)[0];
    },
    update: function (character) {
        if (!character.size) return;
        const size = this.getByName(character.size);
        character.armorClass.sizeModifier = size.attack;
        character.grapple.sizeModifier = size.grapple;
        var hideSkill = character.skills.filter(skill => skill.name === "Hide")[0];
        hideSkill.hiddenModifier = size.hide;
    }
}