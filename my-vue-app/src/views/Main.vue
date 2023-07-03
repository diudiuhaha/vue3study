<template>
    <div class="common-layout">
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <!-- <el-header>Header</el-header> -->
          <CommonHeader />
          <el-main>Main
            <router-view />
          </el-main>
        </el-container>
      </el-container>
    </div>
  </template>
  

<script>
import { defineComponent } from 'vue'; //用于定义组件的类型和工具函数
import CommonHeader from '../components/CommonHeader.vue'; //调用自定义组件
export default defineComponent({ //定义一个组件并导出
    components:{ //声明子组件
        CommonHeader,
    }
})
</script>