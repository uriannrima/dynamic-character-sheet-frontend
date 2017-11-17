// CSS Imports.
import 'Assets/styles/utils.css';
import 'Assets/styles/styles.css';
import 'Assets/styles/tabs.css';
import 'Assets/styles/form-validation.css';

// Promise polyfill for IE11.
import Es6Promise from 'es6-promise';
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import router from './router';
import { store } from 'Store';
import Layout from './shared/sections/layout.section';
import vSelect from 'vue-select';
import './Shared/directives/store-sync.directive';

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

Vue.component('v-select', vSelect);
Vue.use(VeeValidate, veeConfig);

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
