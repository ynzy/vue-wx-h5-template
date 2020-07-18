// 兼容 IE
// https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md#babelpolyfill
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 设置 js中可以访问 $cdn
import { $cdn } from '@/config'
Vue.prototype.$cdn = $cdn

// 全局引入按需引入UI库 vant
import '@/plugins/vant'
// 引入全局样式
import '@/assets/css/index.scss'
// 移动端适配
import 'lib-flexible/flexible.js'
// 引入移动端调试
import '@/utils/vconsole.js'
// filters
import './filters'
// 全局注册微信js-sdk
import WechatPlugin from '@/utils/wechatPlugin'
Vue.use(WechatPlugin)
// 引入本地存储
import { storage, sessionStorage } from '@/utils/storage'
Vue.prototype.$storage = storage
Vue.prototype.$sessionStorage = sessionStorage
// 动态设置title
Vue.use(require('vue-wechat-title'))

Vue.config.productionTip = false



new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
