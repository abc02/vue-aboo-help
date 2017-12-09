import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui'
import '@/styles/reset.scss'
import '@/styles/base.scss'

import Back from '@/components/Back'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

new Vue({
  el: '#app',
  components: {
    Back
  },
  data: {
    title: '常见问题',
    content: [
      {
        title: '新设备如何激活并绑定？',
        text: [
          '1.首次使用设备，请按照说明书的流程正确安装，然后按照APP提示扫描说明书上的二维码完成绑定操作。',
          '2.已绑设备，请按照APP提示扫描设备二维码并让管理员在APP中点击“同意”按钮。'
        ]
      },
      {
        title: '设备管理员是谁？',
        text: [
          '默认情况下，设备管理员是第一个绑定设备的成员；在“设备管理”界面可以查看当前管理员是谁，管理员可以在此界面下将自己的权限转移给任意一个成员。'
        ]
      },
      {
        title: '一台手机可以绑定几个设备，如何绑定更多设备？',
        text: [
          '一台手机最多可以绑定5个设备，在APP我的设备界面“添加设备”按钮即可绑定新设备。'
        ]
      },
      {
        title: '设备能待机多久？',
        text: [
          '设备电池容量为600毫安，理想状态下可待机5天，实际续航时间与所在地区网络信号状态及设备使用频率有关系。'
        ]
      },
      {
        title: '设备的定位精度怎么样？',
        text: [
          '室外最高精度可达15米，室内最高精度可达20米。',
          'WiFi热点分布、基站信号强弱、建筑物遮挡及天气状况对定位精度会有一定程度影响。'
        ]
      },
      {
        title: 'APP支持哪些手机？',
        text: [
          '适用Android4.0及以上版本的安卓手机；适用于iOS 10及以上的苹果手机。'
        ]
      }
    ]
  }
})
