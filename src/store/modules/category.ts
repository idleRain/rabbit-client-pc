import { defineStore } from 'pinia'
import request from '@/utils/request'
import { ApiRes, CategoryItem } from '@/types'
import { topCategory } from '@/store/constants'

const defaultCategoryList = topCategory.map(item => ({name: item}))

export default defineStore('category', {
  state: () => ({
    list: defaultCategoryList as CategoryItem[]
  }),
  actions: {
    async getAllCategory() {
      const res = await request.get<ApiRes<CategoryItem>>('/home/category/head')
      res.data.result.forEach(item => item.open = false)
      // console.log(res)
      this.list = res.data.result
    },
    showOrHide(id: string, state: boolean) {
      this.list.find(item => item.id === id)!.open = state
    }
  }
})
