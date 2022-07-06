import { App } from 'vue'
import Skeleton from '@/components/skeleton/index.vue'

export default {
  install(app: App) {
    app.component(Skeleton.name, Skeleton)
  }
}
