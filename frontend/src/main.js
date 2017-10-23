// Promise polyfill for IE11.
import Es6Promise from 'es6-promise';
Es6Promise.polyfill();

// Extend Array with Group By.
Array.prototype.groupBy = function (funcProp) {
    return this.reduce(function (acc, val) {
        (acc[funcProp(val)] = acc[funcProp(val)] || []).push(val);
        return acc;
    }, {});
};

// CSS Grid Polyfill
// import './utils/css-grid-polyfill';

import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VeeValidate from 'vee-validate';
import Routes from './routes';
import { store } from './store';

import Layout from './shared/layout.component';

const veeConfig = {
    classes: true,
    classNames: {
        touched: 'touched', // the control has been blurred
        untouched: 'untouched', // the control hasn't been blurred
        valid: 'valid', // model is valid
        invalid: 'invalid', // model is invalid
        pristine: 'pristine', // control has not been interacted with
        dirty: 'dirty' // control has been interacted with
    }
}

Vue.use(VeeValidate, veeConfig);
Vue.use(VueRouter);

const router = new VueRouter(Routes);

new Vue({
    store,
    el: '#dcs-app',
    router,
    data: {
    },
    components: {
        'dcs-layout': Layout
    }
});
