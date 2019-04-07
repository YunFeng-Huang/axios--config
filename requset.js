import Vue from 'vue'
import router from '@/router'
import axios from 'axios'
import {Message} from 'iview'
const login_token = process.env.LOGIN_TOKEN;

const service = axios.create({
    timeout: 1000 * 30,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})
// request拦截器
service.interceptors.request.use(config => {
    config.headers['token'] = Vue.cookie.get(login_token) || '';
    return config;
}, error => {
    return Promise.reject(error)
})
// response拦截器
service.interceptors.response.use(res => {
    if(res.status == 200){
        if(res.data.errorCode == 4021001001){
            // Vue.cookie.delete(login_token);
            // iframePost.postMsg({cmd:"goToLogin"})
            Message.destroy()
            Message.error('登录超时,请重新登录');
        }
        return res.data;
    }else{
        return {
            msg: res.statusText
        };
    }
}, err => {
    return Promise.reject(err)
})
export default service
