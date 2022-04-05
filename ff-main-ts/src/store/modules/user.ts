export default {
    state:{
        name:''
    },
    mutations:{
        change(state: { name: any },val: any){
            state.name = val
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