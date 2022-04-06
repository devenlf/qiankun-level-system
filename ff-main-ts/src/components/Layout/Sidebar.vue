<template>
          <el-aside width="200px">
          <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                :collapse="isCollapse"
                @open="handleOpen"
                @close="handleClose"
            >
            <el-menu-item index="1">
                <el-icon><icon-menu /></el-icon>
                <template #title>首页</template>
            </el-menu-item>
            <el-sub-menu index="2">
                <template #title>
                    <el-icon><location /></el-icon>
                    <span>后台管理</span>
                </template>
                 <el-sub-menu index="1-1">
                    <template #title><span>bcc后台</span></template>
                    <el-menu-item index="1-4-1">整车商城</el-menu-item>
                    <el-menu-item index="1-4-2">预约维保</el-menu-item>
                    <el-menu-item index="1-4-3">试驾管理</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="1-2" @click="openBase('vue3')">
                    <template #title>微应用</template>
                    <!-- <el-menu-item index="1-4-2">item one</el-menu-item> -->
                </el-sub-menu>
            </el-sub-menu>
        </el-menu>
      </el-aside>
</template>

<script>
import { useRouter } from "vue-router"

export default {
    name:'Sidebar',
    setup(){
    const route = useRouter()
    const openBase = (val) => {
            route.push(val)
        }
        return {
            openBase
        }
        },

}
</script>

<style>
     .el-aside{
            background-color: rgb(48, 65, 86);
                color: rgb(191, 203, 217);
                    color: rgb(191, 203, 217);
    }
    .el-aside ul li{
               background-color: rgb(48, 65, 86); 
                    color: rgb(191, 203, 217);
            }
    .el-menu{
          --el-menu-active-color:unset !important;
          --el-menu-text-color: unset !important;
          /* --el-menu-hover-text-color: unset;
          --el-menu-bg-color: unset;
          --el-menu-hover-bg-color: unset;
          --el-menu-item-font-size: unset;
          --el-menu-border-color: unset; */
    }
</style>