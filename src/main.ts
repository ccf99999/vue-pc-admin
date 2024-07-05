import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css/normalize.css' // 重置样式

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import '@/styles/index.scss' // global css

// 注册svg
// import '@/icons'


createApp(App).use(ElementPlus).use(store).use(router).mount('#app')
