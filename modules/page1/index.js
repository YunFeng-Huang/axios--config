import api from './api'
import requset from '@/api/requset'
import requsetUrl from '@/api/requsetUrl'
import requsetParam from '@/api/requsetParam'

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
