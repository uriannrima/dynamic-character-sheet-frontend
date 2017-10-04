import axios from 'axios';
import skillModule from 'Modules/skill.module';
import Constants from 'Constants';
import guid from 'Utils/guid';

export default {
    skillsOffline: {

    },
    new: function (data = {}) {
        return new skillModule.skill(data);
    },
    toCharacterFeat: function (skill) {
        // Change it to become a character skill.
        skill._id = guid.generate();
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
            }, reason => {
                return this.skillsOffline[skill._id] = skill;
            });
        } else {
            return axios.post(Constants.API_URL + '/skills', { skill }).then(response => {
                return response.data;
            }, reason => {
                skill._id = guid.generate();
                return this.skillsOffline[skill._id] = skill;
            });
        }
    }
}