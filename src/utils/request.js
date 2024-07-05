import axios from 'axios'
import store from '@/store'
import { Message } from 'element-ui'
import router from '@/router'
const service = axios.create({
  // 场景：代码里的一个值，要根据不同环境（开发/上线）要使用不同的值时，就使用环境变量
  // 环境变量：一个变量的值，根据不同环境使用不同的值，这样的变量就是环境变量
  // 1. 在配置文件中定义环境变量名和值
  // 2. 使用环境变量
  // npm run start: 开发：脚手架会加载 .env.development 文件内环境变量挂到 process.env 上
  // npm run build: 打包：脚手架会加载 .env.production 文件内环境变量挂到 process.env 上

  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 20000 // request timeout
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    store.state.user.token && (config.headers.Authorization = `Bearer ${store.state.user.token}`)
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    // 错误统一处理
    Message.error(error.response.data.msg)
    // Token 401处理
    // console.dir(error.response.status)
    if (error.response.status === 401) {
      // 被动退出
      // 1. 跳转到登录
      // router.currentRoute 等价于 this.$route 拿到当前页面路由信息对象
      router.push(`/login?redirect=${router.currentRoute.fullPath}`)
      // 2. 清空用户数据
      store.commit('user/delTokens')
    }
    return Promise.reject(error)
  }
)

export default service
