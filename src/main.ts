import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router"
import { createPinia } from 'pinia'
// 引入去除默认样式的 css
import 'normalize.css'
import '@/assets/styles/common.less'
// 引入自定义插件
import MyUI from '@/components'

const pinia = createPinia()

// .use() 应用插件
createApp(App).use(pinia).use(router).use(MyUI).mount('#app')
