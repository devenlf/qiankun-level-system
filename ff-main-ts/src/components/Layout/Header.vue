<template>
         <el-header>
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
                    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
                    <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
                </el-breadcrumb>

        </el-header>
</template>

<script>
export default {
  name:'Header'
}
</script>

<style>
       .el-header{
          border-bottom: 1px solid #ccc;
          display: flex;
          align-items: center;
          width:100%;
    }
</style>