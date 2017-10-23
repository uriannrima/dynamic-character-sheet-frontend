import axios from 'axios';
import sizeModule from 'Modules/size.module';
import Constants from 'Constants';

export default {
    getAll: function () {
        return axios.get(Constants.API_URL + '/sizes/').then(response => {
            return response.data.map(sizeData => {
                return new sizeModule.Size(sizeData);
            });
        });
    }
}
