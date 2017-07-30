import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Routes from './routes';

import Layout from './shared/layout.component';
import css from '../assets/styles';

Vue.use(VueResource);
Vue.use(VueRouter);
const router = new VueRouter(Routes);

const ALL_SKILLS = [
    { name: 'Appraise', keyAbility: 'intelligence', untrained: true, armorCheckPenalty: false },
    { name: 'Balance', keyAbility: 'dexterity', untrained: true, armorCheckPenalty: true },
    { name: 'Bluff', keyAbility: 'charisma', untrained: true, armorCheckPenalty: false },
    { name: 'Climb', keyAbility: 'strength', untrained: true, armorCheckPenalty: true },
    { name: 'Concentration', keyAbility: 'constitution', untrained: true, armorCheckPenalty: false },
    { name: 'Craft', subValue: true, keyAbility: 'intelligence', untrained: true, armorCheckPenalty: false },
    { name: 'Decipher Script', keyAbility: 'intelligence', untrained: false, armorCheckPenalty: false },
    { name: 'Diplomacy', keyAbility: 'charisma', untrained: true, armorCheckPenalty: false },
    { name: 'Disable Device', keyAbility: 'intelligence', untrained: false, armorCheckPenalty: false },
    { name: 'Disguise', keyAbility: 'charisma', untrained: true, armorCheckPenalty: false },
    { name: 'Escape Artist', keyAbility: 'dexterity', untrained: true, armorCheckPenalty: true },
    { name: 'Forgery', keyAbility: 'intelligence', untrained: true, armorCheckPenalty: false },
    { name: 'Gather Information', keyAbility: 'charisma', untrained: true, armorCheckPenalty: false },
    { name: 'Handle Animal', keyAbility: 'charisma', untrained: false, armorCheckPenalty: false },
    { name: 'Heal', keyAbility: 'Wis', untrained: true, armorCheckPenalty: false },
    { name: 'Hide', keyAbility: 'dexterity', untrained: true, armorCheckPenalty: true },
    { name: 'Intimidate', keyAbility: 'charisma', untrained: true, armorCheckPenalty: false },
    { name: 'Jump', keyAbility: 'strength', untrained: true, armorCheckPenalty: true },
    { name: 'Knowledge', subValue: true, keyAbility: 'intelligence', untrained: false, armorCheckPenalty: false },
    { name: 'Listen', keyAbility: 'Wis', untrained: true, armorCheckPenalty: false },
    { name: 'Move Silently', keyAbility: 'dexterity', untrained: true, armorCheckPenalty: true },
    { name: 'Open Lock', keyAbility: 'dexterity', untrained: false, armorCheckPenalty: false },
    { name: 'Perform', subValue: true, keyAbility: 'charisma', untrained: false, armorCheckPenalty: false },
    { name: 'Profession', subValue: true, keyAbility: 'Wis', untrained: false, armorCheckPenalty: false },
    { name: 'Ride', keyAbility: 'dexterity', untrained: true, armorCheckPenalty: false },
    { name: 'Search', keyAbility: 'intelligence', untrained: true, armorCheckPenalty: false },
    { name: 'Sense Motive', keyAbility: 'Wis', untrained: true, armorCheckPenalty: false },
    { name: 'Sleight of Hands', keyAbility: 'dexterity', untrained: false, armorCheckPenalty: true },
    { name: 'Spellcraft', keyAbility: 'intelligence', untrained: false, armorCheckPenalty: false },
    { name: 'Spot', keyAbility: 'Wis', untrained: true, armorCheckPenalty: false },
    { name: 'Survival', keyAbility: 'Wis', untrained: true, armorCheckPenalty: false },
    { name: 'Swim', keyAbility: 'strength', untrained: true, armorCheckPenalty: true },
    { name: 'Tumble', keyAbility: 'dexterity', untrained: false, armorCheckPenalty: true },
    { name: 'Use Magic Device', keyAbility: 'charisma', untrained: false, armorCheckPenalty: false },
    { name: 'Use Rope', keyAbility: 'dexterity', untrained: true, armorCheckPenalty: false }
];

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
        }],
        attacks: [{}, {}, {}, {}, {}],
        skills: ALL_SKILLS
    },
    components: {
        'dcs-layout': Layout
    }
});