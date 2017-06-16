import Vue from 'vue';
import Layout from './shared/layout.component.js';
import bootstrap from 'bootstrap';
import css from '../assets/styles.css';

console.log(bootstrap);
console.log(css);

new Vue({
    el: "#dcs-app",
    components: {
        'dcs-layout': Layout
    },
    data: {
        title: 'Hello'
    }
});