import  axios from "axios";
import queryString from 'query-string';

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL_DEV,
    paramsSerializer: (params) => queryString.stringify(params)
})

export default axiosInstance