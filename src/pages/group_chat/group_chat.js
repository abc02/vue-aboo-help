import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui'
import '@/styles/reset.scss'
import '@/styles/base.scss'
import Back from '@/components/Back'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

import ios23 from './assets/ios/23.png'
import ios24 from './assets/ios/24.png'
import ios25 from './assets/ios/25.png'
import ios26 from './assets/ios/26.png'
import ios27 from './assets/ios/27.png'
import ios28 from './assets/ios/28.png'

import android23 from './assets/android/23.png'
import android24 from './assets/android/24.png'
import android25 from './assets/android/25.png'
import android26 from './assets/android/26.png'
import android27 from './assets/android/27.png'
import android28 from './assets/android/28.png'

new Vue({
  el: '#app',
  components: {
    Back
  },
  data: {
    isiOS: null,
    isAndroid: null,
    title: '家庭群聊',
    content: [
      {
        title: '家庭群聊入口',
        text:[
          '每双鞋垫都会有一个家庭群聊，只要成功绑定过此鞋垫的用户都可进入该家庭群聊'
        ],
        iosSwiper: [ios23],
        androidSwiper: [android23]
      },
      {
        title: '此数量代表当前鞋垫家庭群聊的未读消息数量',
        iosSwiper: [ios24],
        androidSwiper: [android24]
      },
      {
        title: '可以发送图片 发送表情  还能@群员哦',
        iosSwiper: [ios25, ios28],
        androidSwiper: [android25, android28]
      },
      {
        title: '可查看家庭群员，也可以通过“+”进入分享界面，邀请家庭人员绑定进来',
        iosSwiper: [ios26, ios27],
        androidSwiper: [android26, android27]
      }
    ]
  },
  created() {
    var u = navigator.userAgent;
    this.isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    this.isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  }
})
