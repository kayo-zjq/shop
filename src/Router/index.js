import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'
import Register from '../views/Register'
import Search from '../views/Search'

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {path : '/home',component:Home,name:'Home'},
        {path:'/login',component:Login,name:'Login'},
        {path:'/register',component:Register,name:'Register'},
        {path:'/search',component:Search,name:'Search'},
        {path:'/',redirect:'/home'},
    ]
})

let originPush = VueRouter.prototype.push;

VueRouter.prototype.push = function(location, resolve, reject){
    
    
    if(resolve && reject){
        //originPush(location,resolve,reject);
        originPush.call(this, location, resolve, reject);
    }else{
        //originPush(location,()=>{},()=>{});
        originPush.call(this, location, ()=>{}, ()=>{})
    }
}