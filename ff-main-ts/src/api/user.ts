import request from '../requset'


export const userInfo = async (params:any) => {
    await request.get('/info', params)
}



