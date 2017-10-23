import axios from 'axios';
import SkillModule from 'Modules/skill.module';
import Constants from 'Constants';

export default {
    skillsOffline: {

    },
    new: function (data = {}) {
        return new SkillModule.Skill(data);
    },
    toCharacterFeat: function (skill) {
        // Change it to become a character skill.
        return new SkillModule.Skill(skill);
    },
    get: function () {
        return SkillModule.DEFAULT_SKILLS;
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
