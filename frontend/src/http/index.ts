import axios from "axios";

export const AUTH_URL = 'http://localhost:8080/auth'
export const API_URL = 'http://localhost:8080/api'


const $auth = axios.create({
    withCredentials: true,
    baseURL: AUTH_URL
})

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

export {
    $auth,
    $api
}