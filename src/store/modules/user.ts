export default {
  namespaced: true,
  state: {
    profile: {
      id: '',
      avatar: '',
      token: ''
    }
  },
  mutations: {
    updateUserinfo(state: any, payload: object): void {
      console.log(payload)
      state.profile = payload
    }
  },
  actions: {}
}
