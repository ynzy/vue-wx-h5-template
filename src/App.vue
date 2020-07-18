<template>
  <div id="app">
    <router-view v-wechat-title="$route.meta.title" />
    <div class="vc-tigger" @click="toggleVc"></div>
  </div>
</template>
<script>
import { env } from '@/config'
export default {
  name: 'App',
  data() {
    return {
      lastClickTime: 0,
      count: 0,
      limit: env == 'production' ? 10 : 0
    }
  },
  created() {
    console.log(this.$wx)
  },
  methods: {
    hasClass(obj, cls) {
      return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
    },
    addClass(obj, cls) {
      if (!this.hasClass(obj, cls)) obj.className += ' ' + cls
    },
    toggleClass(obj, cls) {
      if (this.hasClass(obj, cls)) {
        this.removeClass(obj, cls)
      } else {
        this.addClass(obj, cls)
      }
    },
    removeClass(obj, cls) {
      if (this.hasClass(obj, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
        obj.className = obj.className.replace(reg, ' ')
      }
    },
    toggleVc() {
      const nowTime = new Date().getTime()
      if (nowTime - this.lastClickTime < 3000) {
        this.count++
      } else {
        this.count = 0
      }
      this.lastClickTime = nowTime
      if (this.count >= this.limit) {
        let vconDom = document.getElementById('__vconsole')
        this.toggleClass(vconDom, 'show')
        this.count = 0
      }
    }
  }
}
</script>
<style lang="scss">
.vc-tigger {
  position: absolute;
  top: 0;
  right: 0;
  width: 5px;
  height: 5px;
  // background: red;
}
.show {
  display: block !important;
}
</style>
