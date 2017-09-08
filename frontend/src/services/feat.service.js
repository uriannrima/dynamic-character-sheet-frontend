import axios from 'axios';
import featModel from 'Models/feat.model';
import Constants from 'Constants';

export default {
    featsOffline: {

    },
    new: function () {
        return new featModel({});
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