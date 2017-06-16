import Vue from 'vue';
import Layout from './shared/layout.component';
import bootstrap from 'bootstrap';
import css from '../assets/styles';

new Vue({
    el: "#dcs-app",
    components: {
        'dcs-layout': Layout
    }
});