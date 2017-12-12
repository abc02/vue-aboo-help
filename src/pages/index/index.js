import Vue from 'vue'
import { Cell } from 'mint-ui'

Vue.component(Cell.name, Cell)
import '@/styles/reset.scss'
import '@/styles/base.scss'
import './index.scss'

import logo from './assets/logo.png'
import phone from './assets/phone.png'
new Vue({
  el: '#app',
  data: {
    nav: [
      {
        text: '常见问题',
        url: 'FAQ.html'
      },
      {
        text: '功能介绍',
        url: 'app_use.html'
      },
      {
        text: '定位失败原因',
        url: 'location.html'
      },
      {
        text: '设备无法联网',
        url: 'network.html'
      }
    ],
    contact: [
      {
        icon: phone,
        text: '全国服务热线 (周一至周五9:00-17:00)',
        label: '0577-88789089',
        url: 'tel:0577-88789089'
      },
      {
        icon: logo,
        text: '阿布跑跑官方网站',
        label: 'http://abupaopao.0577xiedu.net',
        url: 'http://abupaopao.0577xiedu.net'
      }
    ]
  }
})
