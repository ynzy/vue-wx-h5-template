import wx from 'weixin-js-sdk'

const plugin = {
  install(Vue) {
    Vue.prototype.$wx = wx
    Vue.wx = wx
  },
  $wx: wx
}

export default plugin
export const install = plugin.install
