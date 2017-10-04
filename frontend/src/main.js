// Promise polyfill for IE11.
import Es6Promise from 'es6-promise';
Es6Promise.polyfill();

// CSS Grid Polyfill
// import './utils/css-grid-polyfill';

import Vue from 'vue';
import VueRouter from 'vue-router';
import VeeValidate from 'vee-validate';
import Routes from './routes';

import Layout from './shared/layout.component';

Vue.use(VeeValidate);
Vue.use(VueRouter);

const router = new VueRouter(Routes);

new Vue({
    el: "#dcs-app",
    router,
    data: {
    },
    components: {
        'dcs-layout': Layout
    }
});