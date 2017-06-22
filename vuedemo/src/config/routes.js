/**
 * Created by wangna on 2017/6/21.
 */

// 引用模板
import index from '../page/index.vue'
import content from '../page/content.vue'
// 引用子路由
import frame from '../frame/subroute.vue'
// 引用子页面
import userInfo from '../page/user/info.vue'
// 配置路由
export default [
  {
    path: '/',
    component: index
  },
  {
    path: '/content',
    component: content
  },
  {
    path: '/user',
    component: frame,
    children: [
      {
        path: 'info',
        component: userInfo
      }
    ]
  }
]
