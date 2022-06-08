import { createStore } from "vuex"
import cart from './modules/cart'
import user from './modules/user'
import createPersistedState from 'vuex-persistedstate'

/*
* vue2 new Vuex.Store({}) 创建仓库
* vue3 createStore({}) 创建仓库
* */

export default createStore({
  modules: {
    user,
    cart
  },
  plugins: [
    createPersistedState({
      key: 'rabbit-store',
      paths: [ 'user', 'cart' ]
    })
  ]
})
