import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueSetupExtend()],
  server: {
    // 修改端口
    port: 12321
  },
  resolve: {
    // 让 @ 指向 src 目录
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    // 让所有组件自动注入这两个 less 文件
    preprocessorOptions: {
      less: {
        additionalData: `
          @import "@/assets/styles/variables.less";
          @import "@/assets/styles/mixins.less";
        `
      }
    }
  }
})
