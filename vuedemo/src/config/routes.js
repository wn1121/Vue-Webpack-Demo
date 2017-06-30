/**
 * Created by wangna on 2017/6/21.
 */

// 引用模板
import index from '../views/index.vue'
import content from '../views/content.vue'
// 引用子路由
// import frame from '../frame/subroute.vue'
// 引用子页面
import hot from '../views/hot.vue'

// 配置路由
export default [
  {
    path: '/',
    component: index
  },
  {
    path: '/index',
    component: index
  },
  {
    path: '/content/:id/:username',
    component: content,
    name: 'content',
    children: [
      {
        name: 'hot',
        path: 'hot',
        component: hot
      }
    ]
  }
]
