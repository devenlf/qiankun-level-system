
import { initGlobalState } from 'qiankun';

const state = {
    name: '',
    age: ''
}

// 初始化通信池
const actions = initGlobalState(state);

export default actions
