<template>
  <div id="subapp-viewport"></div>
</template>

<script>
import { start } from 'qiankun';
export default {
  name: 'App',
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
