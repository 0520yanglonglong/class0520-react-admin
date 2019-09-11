/*
* 封装axios代码
* */
import axios from 'axios';
import { message } from 'antd';
import  store from '@redux/store';
 const instance = axios.create({
    baseURL:'http://localhost:3000/api',
    timeout:5000,
});
 instance.interceptors.request.use((
     (config) => {
         const { token } =store.getState().user;
         if(token){
             config.headers.authorization = token;
         }
         return config;
     }
 ))

instance.interceptors.response.use(
    (response)=>{
        //请求成功
        const  result =response.data;
        if(result.status===0){
            return result.data;
        }else {
            //功能失败
            message.error(result.msg);
            return Promise.reject(result.msg);
        }
    },
    (error) => {
        message.error('未知错误，请联系管理员');
        return Promise.reject('未知错误，请联系管理员');
    }
);
//设置请求拦截器，发送之前触发函数
export default  instance;