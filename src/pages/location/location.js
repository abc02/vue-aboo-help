import Vue from 'vue'
import '@/styles/reset.scss'
import '@/styles/base.scss'
import Back from '@/components/Back'
new Vue({
  el: '#app',
  components: {
    Back
  },
  data: {
    title: '定位失败原因',
    content: [
      {
        title: '定位失败的原因是什么？',
        text: [
            '1.当鞋垫处于关机状态时，鞋垫无法获取定位信息。',
            '2.鞋垫开机时，将会自动连接网络，此时无法获取定位信息，等待1-3分钟即可正常获取鞋垫定位信息。',
            '3.入无网络信号覆盖区域时，将无法正常通过网络获取定位信息，定位信息也无法正常传回APP，当进入网络信号覆盖区域时，即可自动获取定位信息。'
        ]
      }
    ]
  }
})
