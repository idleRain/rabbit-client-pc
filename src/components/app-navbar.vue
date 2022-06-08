<template>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <template v-if="token">
          <li><a href="javascript:void(0)"><i class="iconfont icon-user"></i>周杰伦</a></li>
          <li><a href="javascript:void(0)">退出登录</a></li>
        </template>
        <template v-else>
          <li><a href="javascript:void(0)">请先登录</a></li>
          <li><a href="javascript:void(0)">免费注册</a></li>
        </template>
        <li><a href="javascript:void(0)">我的订单</a></li>
        <li><a href="javascript:void(0)">会员中心</a></li>
        <li><a href="javascript:void(0)">帮助中心</a></li>
        <li><a href="javascript:void(0)">关于我们</a></li>
        <li><a href="javascript:void(0)"><i class="iconfont icon-phone"></i>手机版</a></li>
      </ul>
    </div>
  </nav>
</template>
<script lang="ts">
import { useStore } from "vuex"
import { computed } from "vue"

export default {
  setup() {
    const store = useStore()
    // 使用 vuex state 中的数据需要计算属性实现响应式
    const token = computed(() => {
      return store.state.user.profile.token
    })

    return {
      token
    }
  }
}
</script>

<style scoped lang="less">
@import "src/styles/variables";
.app-topnav {
  background: #333;
  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;
    li {
      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;
        i {
          font-size: 14px;
          margin-right: 2px;
        }
        &:hover {
          color: @xtxColor;
        }
      }
      ~ li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}
</style>
