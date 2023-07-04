<template>
  <el-aside width="150px">
    <el-menu default-active="2" class="el-x-vertical-demo" background-color="#545c64" text-color="#fff" :collapse="false">
      <!-- 动态index -->
      <el-menu-item :index="item.path" v-for="item in noChildren()" :key="item.path">
        <!-- <el-icon><icon-menu /></el-icon> -->
        <!-- 动态图标 -->
        <component class="icons" :is="item.icon"></component>
        <!-- 动态标题 -->
        <span>{{ item.label }}</span>
      </el-menu-item>
      <el-sub-menu :index="item.label" v-for="item in hasChindren()" :key="item.path">
        <template #title>
          <!-- 动态图标 -->
          <component class="icons" :is="item.icon"></component>
          <!-- 动态标题 -->
          <span>{{ item.label }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item :index="subItem.path" v-for="(subItem, subIndex) in item.children" :key="subIndex">
            <component class="icons" :is="subItem.icon"></component>
            <span>{{ subItem.label }}</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>


<script>
export default {
  setup() {
    const list = [
      {
        path: '/user',
        name: 'user',
        label: '用户管理',
        icon: 'user',
        url: 'UserManage/UserManage',
      },
      {
        path: '/other',
        label: "其他",
        icon: "setting",
        children: [
          {
            path: '/page1',
            name: 'page1',
            label: '页面1',
            icon: 'setting',
            url: 'Other/page1',
          },
          {
            path: '/page2',
            name: 'page2',
            label: '页面2',
            icon: 'setting',
            url: 'Other/page2',
          }
        ]

      }
    ];
    // 判断是否有二级菜单
    const noChildren = () => {
      return list.filter((item) => !item.children)
    };
    const hasChindren = () => {
      return list.filter((item) => item.children)
    };
    return {
      noChildren,
      hasChindren,
    };
  },
};
</script>

<style lang="less" scoped>
.icons {
  width: 18px;
  height: 18px;
}
</style>