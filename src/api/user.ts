import instance from "../utils/request"

export function getUserinfo(): Promise<object> {
  return instance({
    method: 'get',
    url: '/member/profile'
  })
}
