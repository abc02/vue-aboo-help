import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui'
import '@/styles/reset.scss'
import '@/styles/base.scss'

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

import image01 from './assets/1.png'
import image02 from './assets/2.png'
import image03 from './assets/3.png'
import image04 from './assets/4.png'
import image05 from './assets/5.png'
import image06 from './assets/6.png'
import image07 from './assets/7.png'
import image08 from './assets/8.png'
import image09 from './assets/9.png'
import image10 from './assets/10.png'
import image11 from './assets/11.png'
import image12 from './assets/12.png'
import image13 from './assets/13.png'
import image14 from './assets/14.png'
import image15 from './assets/15.png'
import image16 from './assets/16.png'
import image17 from './assets/17.png'
import image18 from './assets/18.png'
import image19 from './assets/19.png'
import image20 from './assets/20.png'
import image21 from './assets/21.png'
import image22 from './assets/22.png'
new Vue({
  el: '#app',
  data: {
    title: '功能介绍',
    content: [
      {
        title: '添加新成员',
        text:[
          '新用户扫描二维码时，并正确输入设备密码“默认密码0000”管理员就会收到请求绑定通知，管理员进入指定设备的绑定列表界面，可进行同意/拒绝操作，当管理员同意/拒绝新用户即可收到通知。'
        ],
        swiper: [image01, image02, image03, image04]
      },
      {
        title: '更改管理员',
        text:[
          '如需更改设备管理员，在绑定列表界面选择一位用户，向左滑动点击“转让”按钮，当新管理员收到通知时，说明管理员权限转让成功。'
        ],
        swiper: [image05, image06, image07]
      },
      {
        title: '移除成员（仅管理员有移除权限）',
        text:[
          '进入“绑定列表”界面，移除成员时，选择需要移除的成员，点击移除，被移除成员将会收到通知。'
        ],
        swiper: [image05, image06, image08]
      },
      {
        title: '设备密码修改（仅管理员有修改权限）',
        swiper: [image15, image16]
      },
      {
        title: '获取位置',
        text:[
          '设备会根据用户设置的模式（省电模式：1小时，非省电模式：3分钟）进行自动上传位置信息。用户也可点击更新位置按钮，获取设备当前所在位置信息。'
        ]
      },
      {
        title: '设备状态',
        swiper: [image09, image10, image11, image12, image13, image14]
      },
      {
        title: '设置安全守护',
        text:[
          '进入“安全守护”界面，点击“添加围栏”选择围栏位置和围栏大小，选择好点击下一步，设置围栏名称，即可添加成功。'
        ],
        swiper: [image17, image18, image19]
      },
      {
        title: '历史轨迹',
        text:[
          '进入“历史轨迹”界面，选择日期查看轨迹。'
        ],
        swiper: [image20, image21, image22]
      },
    ]

  }
})
