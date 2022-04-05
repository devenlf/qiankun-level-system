import action from './qiankundataServer'
export default {
    state:{
        name: '',
        age: ''
    },
    mutations:{
        change(state: { name: any },val: any){
            state.name = val
            let newState = {
                ...state,
                name: val
            } 
            action.setGlobalState(newState)
        }
    },
    actions:{
        changeAction({commit,state}: any, name: any){
            setTimeout(()=>{
                commit('change',name)
            },1000)
        }
    },
}