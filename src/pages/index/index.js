import Vue from 'vue'
import { Cell } from 'mint-ui'
Vue.component(Cell.name, Cell)
new Vue({
  el: '#app',
  data: {
    nav: [
      {
        text: '鞋垫介绍',
        url: 'fixing.html'
      },
      {
        text: 'APP使用',
        url: 'use.html'
      }
    ],
    contact: [
      {
        text: '全国服务热线 (周一至周五9:00-17:00)',
        label: '0577-88789089',
        url: '0577-88789089'
      },
      {
        text: '阿布跑跑官方网站',
        label: 'http://0577xiedu.net',
        url: 'http://0577xiedu.net'
      }
    ]
  }
})
