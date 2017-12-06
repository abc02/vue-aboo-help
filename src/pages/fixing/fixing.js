import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui'
import '@/styles/reset.scss'
import '@/styles/base.scss'

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

import prod01 from './assets/prod-01.png'
import prod02 from './assets/prod-02.png'
import prod03 from './assets/prod-03.png'
new Vue({
  el: '#app',
  data: {
    title: '鞋垫介绍',
    content: [
      {
        title: '鞋垫包装',
        text: ['智能鞋垫，无线充电，说明书'],
        swiper: [prod01, prod02, prod03]
      },
      {
        title: '识别鞋垫充电',
        text: ['用户打开设备包装后，将鞋垫放在无线充电器上即可进行充电。', '红灯常亮后表示正在充电，当电量充满时绿灯将会亮起。'],
      },
      {
        title: '识别鞋垫关机、开机',
        text: ['用户打开包装时设备默认开机状态中。', '电池耗尽，放在无线充电器上当电量达到10%时设备将自动开机。'],
      },
      {
        title: '鞋垫保养及维修',
        text: [
          '非专业人士不可自行拆开设备，当设备出现故障时请拨打售后服务热线电话或与当地经销商联系。',
          '请勿使用化学溶剂或清洁剂清洗本产品。',
          '请避免淋水、浸水、摔落、敲打、扭曲，防止设备爆裂，损坏内部器件。',
          '请保持电量处于饱满状态，长时间不用，电池会自行放电，不使用请将电池充电后放置在干燥清凉避光的地方。',
          '请将产品远离火源，高温高热等极端环境。',
          '本设备在断电状态和服务区以外时，定位功能是无法工作的。'
        ]
      }
    ]
  }
})
