import { createApp } from 'vue'
import { registerMicroApps, setDefaultMountApp} from 'qiankun';
import App from './App.vue'
import {subMap} from './map-sub-app'

registerMicroApps(subMap)
setDefaultMountApp('/sub-vue')

createApp(App).mount('#app')
