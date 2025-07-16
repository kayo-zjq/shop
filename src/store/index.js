import Vue from 'vue'
import Vuex from 'vuex'

import search from './search'
import TypeNav from './TypeNav';

Vue.use(Vuex);


export default new Vuex.Store({
    
    modules:{
        search,
        TypeNav,
    },
})