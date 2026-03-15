import axios, { Axios } from "axios";


export const api: Axios = axios.create({baseURL: import.meta.env.VITE_API_URL})
