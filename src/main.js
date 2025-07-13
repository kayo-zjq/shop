import Vue from 'vue'
import App from './App.vue'
import router from './Router'
// 引入mockjs模拟数据文件
import '@/mock/mockServe'

//设置允许调试工具调试
Vue.config.devtools = true


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
