<template>
  <div class="common-layout">
  <el-container>
    <!--  引入左侧组件-->
    <CommonAsider />
    <!-- <el-container>添加一个样式 -->
      <el-container class="r-container">
      <!-- 引入头部 -->
      <CommonHeader />
        <el-main>Main
          <!-- 动态显示区域 -->
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
  

<script>
import { defineComponent } from 'vue'; //用于定义组件的类型和工具函数
import CommonHeader from '../components/CommonHeader.vue'; //调用自定义组件
import CommonAsider from '../components/CommonAsider.vue';
export default defineComponent({ //定义一个组件并导出
    components:{ //声明子组件
        CommonHeader,
        CommonAsider,
    }
})
</script>

<style lang="less" scoped>
.r-container{
  flex-wrap: wrap;
}
</style>