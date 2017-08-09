// Promise polyfill for IE11.
import Es6Promise from 'es6-promise';
Es6Promise.polyfill();

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Routes from './routes';

import utilsCss from '../assets/utils';
import stylesCss from '../assets/styles';

import Layout from './shared/layout.component';

Vue.use(VueResource);
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