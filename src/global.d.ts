import Skeleton from '@/components/skeleton/index.vue'
// 参考：
declare module 'vue' {
  export interface GlobalComponents {
    Skeleton: typeof Skeleton
  }
}
export {}
