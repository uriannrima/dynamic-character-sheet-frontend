import Vue from 'vue';
import VeeValidate from 'vee-validate';
import vSelect from 'vue-select';
import VueTouch from 'vue-touch';
import VueFeathers from 'vue-feathers';
import VuejsDialog from 'vuejs-dialog';
import Es6Promise from 'es6-promise';
import feathers from './feathers';
import Vuetify from 'vuetify';
import 'babel-polyfill';
import PortalVue from 'portal-vue'

Vue.use(Vuetify);
Es6Promise.polyfill();
Vue.component('v-select', vSelect);
VueTouch.registerCustomEvent('doubletap', { type: 'tap', taps: 2 });
Vue.use(VueFeathers, feathers);
Vue.use(VeeValidate, { classes: true, errorBagName: 'vErrors' });
Vue.use(VueTouch, { name: 'v-touch' });
Vue.use(VuejsDialog);
Vue.use(PortalVue)
