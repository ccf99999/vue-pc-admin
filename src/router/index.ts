import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
    {
      path: '/login',
      name:"login",
      component: () => import('@/views/Login/index.vue'),
      meta:{
        hidden: true // 控制当前路由对象是否在侧边栏显示一项（SidebarItem 里还有判断，有 children 才能出现）
      }
      
    },
    // {
    //   path: '/',
    //   component: Layout,
    //   redirect: '/echarts'
    // },
    {
      path: '/echarts',
      component: Layout,
      name:"Echarts",
      children: [{
        path: '',
        name:"e2",
        component: () => import('@/views/Echarts/index.vue'),
        // 路由元信息（给路由对象设置给多参数和值）
        // 这个项目中影响的是左侧菜单的标题
        meta: { title: 'Echarts', icon: 'el-icon-data-board' }
      }]
    },
    {
      path: '/highcharts',
      component: Layout,
      name:"highcharts",
      children: [{
        path: '',
        name:"high2",
        component: () => import('@/views/Highcharts/index.vue'),
        // 路由元信息（给路由对象设置给多参数和值）
        // 这个项目中影响的是左侧菜单的标题
        meta: { title: 'hightitle', icon: 'el-icon-data-board' }
      }]
      
    },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
