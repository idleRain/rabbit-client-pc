import { createApp } from 'vue'
import App from './App.vue'
import store from "./store"
import router from "./router"

// .use() 应用插件
createApp(App).use(store).use(router).mount('#app')
