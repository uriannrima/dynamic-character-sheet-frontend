import axios from 'axios';
import featModule from 'Modules/feat.module';
import Constants from 'Constants';

export default {
    featsOffline: {

    },
    new: function (data = {}) {
        return new featModule.feat(data);
    },
    toCharacterFeat: function(feat) {
        // Change it to become a character feat.
        return new featModule.feat(feat);
    },
    getAll: function () {
        return axios.get(Constants.API_URL + '/feats').then(response => {
            return response.data;
        });
    },
    saveOrUpdate: function (feat) {
        if (feat._id) {
            return axios.put(Constants.API_URL + '/feats', { feat }).then(response => {
                return response.data;
            });
        } else {
            return axios.post(Constants.API_URL + '/feats', { feat }).then(response => {
                return response.data;
            });
        }
    }
}
