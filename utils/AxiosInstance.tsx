import axios from "axios";

console.log("BASE_URL : ",process.env.BASE_URL)

export const AxiosInstance = axios.create({
    baseURL : process.env.NEXT_PUBLIC_BASE_URL
}) 