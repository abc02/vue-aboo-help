import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui'
import '@/styles/reset.scss'
import '@/styles/base.scss'
import Back from '@/components/Back'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

import ios01 from './assets/ios/1.png'
import ios02 from './assets/ios/2.png'
import ios03 from './assets/ios/3.png'
import ios04 from './assets/ios/4.png'
import ios05 from './assets/ios/5.png'
import ios06 from './assets/ios/6.png'
import ios07 from './assets/ios/7.png'
import ios08 from './assets/ios/8.png'
import ios09 from './assets/ios/9.png'
import ios10 from './assets/ios/10.png'
import ios11 from './assets/ios/11.png'
import ios12 from './assets/ios/12.png'
import ios13 from './assets/ios/13.png'
import ios14 from './assets/ios/14.png'
import ios15 from './assets/ios/15.png'
import ios16 from './assets/ios/16.png'
import ios17 from './assets/ios/17.png'
import ios18 from './assets/ios/18.png'
import ios19 from './assets/ios/19.png'
import ios20 from './assets/ios/20.png'
import ios21 from './assets/ios/21.png'
import ios22 from './assets/ios/22.png'

import android01 from './assets/android/1.png'
import android02 from './assets/android/2.png'
import android03 from './assets/android/3.png'
import android04 from './assets/android/4.png'
import android05 from './assets/android/5.png'
import android06 from './assets/android/6.png'
import android07 from './assets/android/7.png'
import android08 from './assets/android/8.png'
import android09 from './assets/android/9.png'
import android10 from './assets/android/10.png'
import android11 from './assets/android/11.png'
import android12 from './assets/android/12.png'
import android13 from './assets/android/13.png'
import android14 from './assets/android/14.png'
import android15 from './assets/android/15.png'
import android16 from './assets/android/16.png'
import android17 from './assets/android/17.png'
import android18 from './assets/android/18.png'
import android19 from './assets/android/19.png'
import android20 from './assets/android/20.png'
import android21 from './assets/android/21.png'
import android22 from './assets/android/22.png'

new Vue({
  el: '#app',
  components: {
    Back
  },
  data: {
    isiOS: null,
    isAndroid: null,
    title: '功能介绍',
    content: [
      {
        title: '添加新成员',
        text:[
          '新用户扫描二维码时，并正确输入设备密码“默认密码0000”管理员就会收到请求绑定通知，管理员进入指定设备的绑定列表界面，可进行同意/拒绝操作，当管理员同意/拒绝新用户即可收到通知。'
        ],
        iosSwiper: [ios01, ios02, ios03, ios04 ],
        androidSwiper: [android01, android02, android03, android04 ]
      },
      {
        title: '更改管理员',
        text:[
          '如需更改设备管理员，在绑定列表界面选择一位用户，向左滑动点击“转让”按钮，当新管理员收到通知时，说明管理员权限转让成功。'
        ],
        iosSwiper: [ios05, ios06, ios07],
        androidSwiper: [android05, android06, android07]
      },
      {
        title: '移除成员（仅管理员有移除权限）',
        text:[
          '进入“绑定列表”界面，移除成员时，选择需要移除的成员，点击移除，被移除成员将会收到通知。'
        ],
        iosSwiper: [ios05, ios06, ios08],
        androidSwiper: [android05, android06, android08]
      },
      {
        title: '设备密码修改（仅管理员有修改权限）',
        iosSwiper: [ios15, ios16],
        androidSwiper: [android15, android16]
      },
      {
        title: '获取位置',
        text:[
          '设备会根据用户设置的模式（省电模式：1小时，非省电模式：3分钟）进行自动上传位置信息。用户也可点击更新位置按钮，获取设备当前所在位置信息。'
        ],
        iosSwiper: [ios09, ios10, ios11, ios12,],
        androidSwiper: [android09, android10, android11, android12,]
      },
      {
        title: '设备状态',
        iosSwiper: [ios13, ios14],
        androidSwiper: [android13, android14]
      },
      {
        title: '设置安全守护',
        text:[
          '进入“安全守护”界面，点击“添加围栏”选择围栏位置和围栏大小，选择好点击下一步，设置围栏名称，即可添加成功。'
        ],
        iosSwiper: [ios17, ios18, ios19],
        androidSwiper: [android17, android18, android19]
      },
      {
        title: '历史轨迹',
        text:[
          '进入“历史轨迹”界面，选择日期查看轨迹。'
        ],
        iosSwiper: [ios20, ios21, ios22],
        androidSwiper: [android20, android21, android22]
      },
    ]
  },
  created() {
    var u = navigator.userAgent;
    this.isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    this.isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  }
})
