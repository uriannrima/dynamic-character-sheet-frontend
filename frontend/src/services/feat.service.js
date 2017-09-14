import axios from 'axios';
import featModule from 'Modules/feat.module';
import Constants from 'Constants';
import guid from 'Utils/guid';

export default {
    featsOffline: {

    },
    new: function () {
        return new featModule.feat({});
    },
    toCharacterFeat: function(feat){
        // Change it to become a character feat.
        feat._id = guid.generate();
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
            }, reason => {
                return this.featsOffline[feat._id] = feat;
            });
        } else {
            return axios.post(Constants.API_URL + '/feats', { feat }).then(response => {
                return response.data;
            }, reason => {
                feat._id = generateGuid();
                return this.featsOffline[feat._id] = feat;
            });
        }
    }
}