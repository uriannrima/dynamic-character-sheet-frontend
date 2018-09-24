import Vue from 'vue'
import VueTouch from 'vue-touch'
import VueFeathers from 'vue-feathers'
import Es6Promise from 'es6-promise'
import feathers from './feathers'
import PortalVue from 'portal-vue'
import Component from 'vue-class-component'
import VueMarkdown from 'vue-markdown'
import VueFormGenerator from 'vue-form-generator'
import Vuelidate from 'vuelidate'

Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate'
])

Es6Promise.polyfill()
VueTouch.registerCustomEvent('doubletap', { type: 'tap', taps: 2 })
Vue.use(VueFeathers, feathers)
Vue.use(VueTouch, { name: 'v-touch' })
Vue.use(PortalVue)
Vue.component('v-md', VueMarkdown)
Vue.use(VueFormGenerator)
Vue.use(Vuelidate)
