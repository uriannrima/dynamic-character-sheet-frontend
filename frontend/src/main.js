import Vue from 'vue';
import VueRouter from 'vue-router';
import Routes from './routes';

import Layout from './shared/layout.component';
import bootstrap from 'bootstrap';
import css from '../assets/styles';

Vue.use(VueRouter)
const router = new VueRouter(Routes);

new Vue({ 
    el: "#dcs-app",
    router,
    components: {
        'dcs-layout': Layout
    }
});