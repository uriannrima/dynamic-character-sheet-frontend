import axios from 'axios';
import specialAbilityModule from 'Modules/special-ability.module';
import Constants from 'Constants';

export default {
    specialAbilitiesOffline: {

    },
    new: function () {
        return new specialAbilityModule.specialAbility({});
    },
    toCharacterSpecialAbility: function(specialAbility) {
        // Change it to become a character special ability.
        return new specialAbilityModule.specialAbility(specialAbility);
    },
    getAll: function () {
        return axios.get(Constants.API_URL + '/specialAbilities').then(response => {
            return response.data;
        });
    },
    saveOrUpdate: function (specialAbility) {
        if (specialAbility._id) {
            return axios.put(Constants.API_URL + '/specialAbilities', { specialAbility }).then(response => {
                return response.data;
            }, reason => {
                return this.specialAbilitiesOffline[specialAbility._id] = specialAbility;
            });
        } else {
            return axios.post(Constants.API_URL + '/specialAbilities', { specialAbility }).then(response => {
                return response.data;
            }, reason => {
                return this.specialAbilitiesOffline[specialAbility._id] = specialAbility;
            });
        }
    }
}
