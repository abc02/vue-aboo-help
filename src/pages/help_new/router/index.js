import Vue from 'vue'
import Router from 'vue-router'
import First from '../components/first.vue'
import QRCode from '../components/qrcode.vue'
import Bind from '../components/bind.vue'
import Index from '../components/index.vue'
import Trajectory from '../components/trajectory.vue'
import TrajectoryDate from '../components/trajectory_date.vue'
import TrajectoryMode from '../components/trajectory_mode.vue'
import TrajectoryMore from '../components/trajectory_more.vue'
import Security from '../components/security.vue'
import SecurityAdd from '../components/security_add.vue'
import SecuritySet from '../components/security_set.vue'
import SecurityList from '../components/security_list.vue'
import SecurityDelete from '../components/security_delete.vue'
import Welfare from '../components/welfare.vue'
import Chat from '../components/chat.vue'
import ChatList from '../components/chat_list.vue'
import Notice from '../components/notice.vue'
import NoticeEdit from '../components/notice_edit.vue'
import NoticeDelete from '../components/notice_delete.vue'
import Member from '../components/member.vue'
import Profile from '../components/profile.vue'
import Fixing from '../components/fixing.vue'
import FixingInfo from '../components/fixing_info.vue'
import FixingVip from '../components/fixing_vip.vue'
import FixingCode from '../components/fixing_code.vue'
import FixingMode from '../components/fixing_mode.vue'
import Bbs from '../components/bbs.vue'
import BbsContent from '../components/bbs_content.vue'
import Share from '../components/share.vue'
import Set from '../components/set.vue'
Vue.use(Router)

const routes = [
  {
    path: '/index',
    name: 'index',
    component: Index
  },

  {
    path: '/first',
    name: 'first',
    component: First
  },
  {
    path: '/qrcode',
    name: 'qrcode',
    component: QRCode
  },
  {
    path: '/bind',
    name: 'bind',
    component: Bind
  },
  {
    path: '/trajectory',
    name: 'trajectory',
    component: Trajectory
  },
  {
    path: '/trajectory_date',
    name: 'trajectory_date',
    component: TrajectoryDate
  },
  {
    path: '/trajectory_mode',
    name: 'trajectory_mode',
    component: TrajectoryMode
  },
  {
    path: '/trajectory_more',
    name: 'trajectory_more',
    component: TrajectoryMore
  },
  {
    path: '/security',
    name: 'security',
    component: Security
  },
  {
    path: '/security_add',
    name: 'security_add',
    component: SecurityAdd
  },
  {
    path: '/security_set',
    name: 'security_set',
    component: SecuritySet
  },
  {
    path: '/security_list',
    name: 'security_list',
    component: SecurityList
  },
  {
    path: '/security_delete',
    name: 'security_delete',
    component: SecurityDelete
  },
  {
    path: '/welfare',
    name: 'welfare',
    component: Welfare
  },
  {
    path: '/chat',
    name: 'chat',
    component: Chat
  },
  {
    path: '/chat_list',
    name: 'chat_list',
    component: ChatList
  },
  {
    path: '/notice',
    name: 'notice',
    component: Notice
  },
  {
    path: '/notice_edit',
    name: 'notice_edit',
    component: NoticeEdit
  },
  {
    path: '/notice_delete',
    name: 'notice_delete',
    component: NoticeDelete
  },
  {
    path: '/fixing',
    name: 'fixing',
    component: Fixing
  },
  {
    path: '/fixing_info',
    name: 'fixing_info',
    component: FixingInfo
  },
  {
    path: '/fixing_vip',
    name: 'fixing_vip',
    component: FixingVip
  },
  {
    path: '/fixing_code',
    name: 'fixing_code',
    component: FixingCode
  },
  {
    path: '/fixing_mode',
    name: 'fixing_mode',
    component: FixingMode
  },
  {
    path: '/member',
    name: 'member',
    component: Member
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/bbs',
    name: 'bbs',
    component: Bbs
  },
  {
    path: '/bbs_content',
    name: 'bbs_content',
    component: BbsContent
  },
  {
    path: '/share',
    name: 'share',
    component: Share
  },
  {
    path: '/set',
    name: 'set',
    component: Set
  }
]
  
const router = new Router({
  routes
})

// router.beforeEach((to, from, next) => {
//   /* 路由发生变化修改页面title */
//   if (to.meta.title) {
//     document.title = to.meta.title
//   }
//   next()
// })

router.replace({ name: 'first' })

export default router
