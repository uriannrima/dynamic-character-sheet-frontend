import axios from 'axios';
import skillModule from 'Modules/skill.module';
import Constants from 'Constants';

export default {
    skillsOffline: {

    },
    new: function (data = {}) {
        return new skillModule.skill(data);
    },
    toCharacterFeat: function (skill) {
        // Change it to become a character skill.
        return new skillModule.skill(skill);
    },
    get: function () {
        return skillModule.DEFAULT_SKILLS;
    },
    getAll: function () {
        return axios.get(Constants.API_URL + '/skills').then(response => {
            return response.data;
        });
    },
    saveOrUpdate: function (skill) {
        if (skill._id) {
            return axios.put(Constants.API_URL + '/skills', { skill }).then(response => {
                return response.data;
            });
        } else {
            return axios.post(Constants.API_URL + '/skills', { skill }).then(response => {
                return response.data;
            });
        }
    }
}
