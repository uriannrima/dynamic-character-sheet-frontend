import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Routes from './routes';

import Layout from './shared/layout.component';
// import bootstrap from 'bootstrap';
import purecss from 'purecss';
import css from '../assets/styles';

Vue.use(VueResource);
Vue.use(VueRouter);
const router = new VueRouter(Routes);

new Vue({
    el: "#dcs-app",
    router,
    components: {
        'dcs-layout': Layout
    }
});