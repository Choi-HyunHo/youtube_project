// import { instance } from "..";
import axios from "axios";

export const searchList = async () => {
    const url = `/data/search.json`;
    const response = axios.get(url).then((res) => {
        return res.data.items;
    });
    return response;
};
