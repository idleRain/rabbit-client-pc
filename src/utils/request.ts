import axios from 'axios'
import store from '../store'
import router from '../router'

const baseURL: string = 'http://pcapi-xiaotuxian-front-devtest.itheima.net'
// baseURL设置/超时时间设置
const instance = axios.create({
  baseURL,
  timeout: 5000
})

// 添加请求拦截器
instance.interceptors.request.use( (config: any) => {
  // 1. 获取token
  // @ts-ignore
  const { token } = store.state.user.profile
  // 2. 请求头设置token
  if (token) {
    config.headers.Authorization = `Bearer ${ token }`
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  return response.data
}, function (error) {
  // 对响应错误做点什么
  if (error.response && error.response.status === 401) {
    const redirectUrl = encodeURIComponent(router.currentRoute.value.fullPath)
    router.push('/login?redirectUrl=' + redirectUrl)
  }
  return Promise.reject(error)
})

/**
 * @param url
 * @param method
 * @param submitData
 */
// const request = (url: string, method: string, submitData: object) => {
//   return instance({
//     url,
//     method,
//     [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
//   })
// }

// export default request
export default instance
