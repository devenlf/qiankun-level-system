/**
 * @author: daoket
 * @description 导入需要的store
 */
 import { createStore } from 'vuex'
 import Project from './modules/project'
 import User from './modules/user'
 
 export default createStore({
   state: {
     slogan: '叩首为梦 码梦为生！',
     historyLength: 0
   },
   mutations: {
     /*
      * @desc 记录路由切换次数
      * @arg {object} state 状态
      */
     updateHistoryLength (state) {
       state.historyLength++
     }
   },
   actions: {
     updateHistoryLength ({commit}) {
       commit('updateHistoryLength')
     }
   },
   modules: {
    Project,
    User
   }
 })