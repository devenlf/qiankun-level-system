import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {subMap} from './map-sub-app'
import { registerMicroApps, addGlobalUncaughtErrorHandler} from 'qiankun';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import  store  from './store'

//捕获全局异常
addGlobalUncaughtErrorHandler((event) => {
   console.error(event);
});

registerMicroApps(subMap)
const app = createApp(App)
app.use(router)
   .use(store)
   .use(ElementPlus)
   .mount('#app')

