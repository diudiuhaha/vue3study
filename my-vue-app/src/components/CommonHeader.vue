<template>
<el-header>
    <div class="l-content">
        <!-- 调用一个图标 -->
        <!-- 在按钮中套用图标 -->
        <el-button size="small">
            <el-icon :size="20"><Menu /></el-icon>
        </el-button>
        
    </div>
    
    <div class="r-content">
        <el-dropdown>
            <span class="el-dropdown-link">
            <img class="userJpg" :src="getImgSrc()" alt="头像" >
            </span>
            <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</el-header>
</template>

<script>
export default{
    setup(){
        const getImgSrc = ()=> {
            return new URL("../assets/images/user.JPG",import.meta.url).href
        };
    return {
        getImgSrc
        };
    },
};
</script>


<style lang="less" scoped>
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width:100%;
    }

    .r-content{
        .userJpg{
            height: 40px;
            width: 40px;
            border-radius:50%;
        }
    }
</style>

