import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Routes from './routes';

import Layout from './shared/layout.component';
import css from '../assets/styles';

Vue.use(VueResource);
Vue.use(VueRouter);
const router = new VueRouter(Routes);

new Vue({
    el: "#dcs-app",
    router,
    data: {
        abilityScores: ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'],
        savingThrows: [{
            name: 'Fortitude',
            keyAbility: 'Constitution'
        }, {
            name: 'Reflex',
            keyAbility: 'Dexterity',
        }, {
            name: 'Will',
            keyAbility: 'Wisdom',
        }]
    },
    components: {
        'dcs-layout': Layout
    }
});