require('./bootstrap');

window.Vue = require('vue');

// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

import User from './Helpers/User'
window.User = User


Vue.component('app-home', require('./components/AppHome.vue').default);
import router from './Router/router'


const app = new Vue({
    el: '#app',
    router,
 
    vuetify: new Vuetify(),
    
});
