import { createApp } from 'vue'
import App from './App.vue'
import store from "./store"
import router from "./router"
// 引入去除默认样式的 css
import 'normalize.css'
import './styles/common.less'
import './styles/variables.less'

// .use() 应用插件
createApp(App).use(store).use(router).mount('#app')
