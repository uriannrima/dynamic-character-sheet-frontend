import Vue from 'vue'
import VeeValidate from 'vee-validate'
import vSelect from 'vue-select'
import VueTouch from 'vue-touch'
import VueFeathers from 'vue-feathers'
import VuejsDialog from 'vuejs-dialog'
import Es6Promise from 'es6-promise'
import feathers from './feathers'
import 'babel-polyfill'
import PortalVue from 'portal-vue'
import Component from 'vue-class-component'
import VueMarkdown from 'vue-markdown';
import VueFormGenerator from 'vue-form-generator';

Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate'
])

Es6Promise.polyfill()
Vue.component('v-select', vSelect)
VueTouch.registerCustomEvent('doubletap', { type: 'tap', taps: 2 })
Vue.use(VueFeathers, feathers)
Vue.use(VeeValidate, { inject: false, classes: true, errorBagName: 'vErrors' })
Vue.use(VueTouch, { name: 'v-touch' })
Vue.use(VuejsDialog)
Vue.use(PortalVue)
Vue.component('v-md', VueMarkdown)
Vue.use(VueFormGenerator);
