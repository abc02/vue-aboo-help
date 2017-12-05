import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui'
import './use.scss'

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

import help01 from './assets/help-01.png'
import help02 from './assets/help-02.png'
import help03 from './assets/help-03.png'
new Vue({
  el: '#app',
  data: {
    lists: [
      help01, help02, help03
    ]
  }
})
