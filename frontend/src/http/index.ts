import axios, {AxiosRequestConfig} from "axios";

export const AUTH_URL = 'http://localhost:8000/auth'
export const API_URL = 'http://localhost:8000/api'


const $auth = axios.create({
    withCredentials: true,
    baseURL: AUTH_URL
})

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

const apiInterceptor = (config: AxiosRequestConfig) => {
    // @ts-ignore
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
}

$api.interceptors.request.use(apiInterceptor)

export {
    $auth,
    $api
}