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
    title: '鞋垫无法联网处理方法',
    content: [
      {
        title: '无法联网',
        text: [
            '可以尝试换个环境或者等一会儿重试。'
        ]
      },
      {
        title: '其他情况',
        text: [
            '1.鞋垫可能已关机，此时需要将鞋垫开机，如果不能开机建议对鞋垫进行充电。',
            '2.鞋垫中的SIM卡可能已经欠费停机，此时需要联系客服进行查询。'
        ]
      }
    ]
  }
})
