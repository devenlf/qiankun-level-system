<script lang="ts">
import { defineComponent } from 'vue'
import Header from './Layout/Header.vue'
import Sidebar from './Layout/Sidebar.vue'
import { start } from 'qiankun'
export default defineComponent({
    components: {
      Header,
      Sidebar
    },
    setup() {},
    mounted(){
      if (!window.qiankunStarted) {
      window.qiankunStarted = true;
      start({
        prefetch: true, // 可选，是否开启预加载，默认为 true。
        sandbox: { strictStyleIsolation: true }, // //开启css沙箱 防止子应用样式污染从而确保微应用的样式不会对全局造成影响。
      });
    }
  }
  })

</script>

<template>
    <div class="common-layout">
    <el-container>
      <Sidebar/>
      <el-main>
         <Header/>
          <div id="sub-app">
              <router-view></router-view>
          </div>
      </el-main>
    </el-container>
  </div>

</template>

<style scoped>
/* @import '../assets/styles/index.scss'; */
.common-layout ,.el-container{
              height: 100%;
          }
</style>
