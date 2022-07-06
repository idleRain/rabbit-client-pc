export interface CategoryItem {
  id: string
  name: string
  picture: string
  open: boolean
  children: CategoryItem[]
  goods: CategoryGoods[]
}

export type CategoryGoods = {
  desc: string
  id: string
  name: string
  picture: string
  price: string
}

export interface ApiRes<T> {
  code: string
  msg: string
  result: T[]
}
