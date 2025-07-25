import Vue from 'vue'
import Vuex from 'vuex'

import Search from './Search'
import TypeNav from './TypeNav';
import Home from './Home';
import Detail from './Detail'

Vue.use(Vuex);


export default new Vuex.Store({
    
    modules:{
        Search,
        TypeNav,
        Home,
        Detail,
    },
})