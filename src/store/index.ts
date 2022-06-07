import {createStore} from "vuex"

/*
* vue2 new Vuex.Store({}) 创建仓库
* vue3 createStore({}) 创建仓库
* */

export default createStore({
  state: {
    num: 10
  },
  mutations: {},
  actions: {},
  getters: {
    NUM(state) {
      return state.num * 10
    }
  },
  modules: {}
})
