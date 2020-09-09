require('./bootstrap');

window.Vue = require('vue');


import Vue from 'vue'

// plugins simplemde

import VueSimplemde from 'vue-simplemde'
import 'simplemde/dist/simplemde.min.css'

Vue.component('vue-simplemde', VueSimplemde)
import md from 'marked'
window.md = md
// src/plugins/vuetify.js

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

import User from './Helpers/User'
window.User = User

import Exception from './Helpers/Exception'
window.Exception = Exception

window.EventBus = new Vue();


Vue.component('app-home', require('./components/AppHome.vue').default);
import router from './Router/router'


const app = new Vue({
    el: '#app',
    router,
 
    vuetify: new Vuetify(),
    
});
