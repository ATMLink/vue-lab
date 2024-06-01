import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import mitt from 'mitt' // 确保你已经安装了 mitt 包

// 创建全局事件
const emitter = mitt()

const app = createApp(App)
app.use(router)
// 提供全局事件
app.provide('emitter', emitter) 
app.mount('#app')