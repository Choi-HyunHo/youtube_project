import axios from "axios";

export const instance = axios.create({
    baseURL: `https://youtube.googleapis.com/youtube/v3/`,
    timeout: 10000,
});
