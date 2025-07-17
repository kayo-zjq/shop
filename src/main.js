import Vue from 'vue'
import App from './App.vue'
import router from './Router'
// 引入mockjs模拟数据文件
import '@/mock/mockServe'

//引入vuex
import store from '@/store'

//设置允许调试工具调试
Vue.config.devtools = true

//引入轮播图样式
import 'swiper/css/swiper.css'
import 'swiper/css/swiper.min.css'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
