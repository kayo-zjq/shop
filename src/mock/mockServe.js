import Mock from 'mockjs'
//webpack默认对外暴露：json、图片
import categoryList from './categoryList.json'
import banner from './banner.json'
import floor from './floor.json'
import list from './list.json' 
import item from './item.json'

//mock数据：第一个参数请求地址、第二个参：请求数据
Mock.mock("/mock/categoryList", { code: 200, data: categoryList })
Mock.mock("/mock/banner", { code: 200, data: banner })//模拟banner数据-首页轮播图
Mock.mock("/mock/floor", { code: 200, data: floor })
Mock.mock("/mock/list", { code:200, data:list })
Mock.mock("/mock/item",{ code:200, data:item})
//记得要在main.js中引入一下
//import ''@/mock/mockServer
