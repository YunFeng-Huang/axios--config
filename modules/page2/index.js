import api from './api'
import requset from '../page1/node_modules/@/api/requset'
import requsetUrl from '../page1/node_modules/@/api/requsetUrl'
import requsetParam from '../page1/node_modules/@/api/requsetParam'

// get请求
let wxPayCode = (params) => {
    return requset({
        url: requsetUrl(api['wxPayCode']),
        method: 'GET',
        params: params,
    })
};

// post请求
let setAccountInfo = (params) => {
    return requset({
        url: requsetUrl(api['setAccountInfo']),
        method: 'post',
        data: requsetParam(params),
    })
};

export default {
    setAccountInfo,
    wxPayCode,
}
