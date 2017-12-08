import Vue from 'vue'
import '@/styles/reset.scss'
import '@/styles/base.scss'

new Vue({
  el: '#app',
  data: {
    title: '定位失败原因',
    content: [
      {
        title: '定位失败的原因是什么？',
        text: [
            '1.当设备处于关机状态时，设备无法获取定位信息。',
            '2.设备开机时，将会自动连接网络，此时无法获取定位信息，等待1-3分钟即可正常获取设备定位信息。',
            '3.入无网络信号覆盖区域时，将无法正常通过网络获取定位信息，定位信息也无法正常传回APP，当进入网络信号覆盖区域时，即可自动获取定位信息。'
        ]
      }
    ]
  }
})
