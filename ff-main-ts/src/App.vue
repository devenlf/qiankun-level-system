<template>
  <router-view v-if="!showLayout"></router-view>
  <Layout v-show="showLayout"/>
</template>

<script lang="ts">
import { ref , watch, defineAsyncComponent} from 'vue'
import Layout from './components/Layout.vue'
import { globalPage } from './config' 
import { useRoute } from "vue-router"
export default {
  name: 'App',
  setup(){
    const showLayout = ref(false) ;
    const routePath = useRoute() ;
    //是否显示LayOut
    watch(
      () => routePath.path,
      () => {
          if (globalPage.includes(routePath.path)) {
            showLayout.value = false
          } else {
            showLayout.value = true
          }
        },
        {
          immediate: true
        }
    )    
    return {
      showLayout
    }
  },
  components: {
    Layout
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
