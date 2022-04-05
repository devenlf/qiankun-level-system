<template>
  <router-view>
      <div id="subapp-viewport"></div>
  </router-view>
</template>

<script>
import { start } from 'qiankun';
export default {
  name: 'Layout',
  mounted() {
    if (!window.qiankunStarted) {
      window.qiankunStarted = true;
      start();
    }
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
