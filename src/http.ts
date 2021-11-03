import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import { ElLoading } from 'element-plus'


let loading: any;

const startLoading = () =>{
    interface Options {
        lock: boolean;
        text: string;
        background: string;

    }

    const options:Options = {
        lock:true,
        text: "Loading...",
        background: 'rgba(0,0,0,0.7)'
    }
    loading = ElLoading.service(options)
}

const endLoading = () =>{
    loading.close();
}


//request interception
axios.interceptors.request.use((config: AxiosRequestConfig) =>{
    startLoading()
    return config;
})


//respond interception
axios.interceptors.response.use((response :AxiosResponse<any>) =>{
    endLoading()
    return response;
}, error =>{
    endLoading()

    return Promise.reject(error)
})


export default axios;