import {CategoryResponse} from "@/types/Category.ts";
import axios from "axios";
import {frontend, backend} from "@/app/routes/routes"

export const getAllCategories = () => {
    let returnCategories = [{} as CategoryResponse];
    const response = axios
        .get(backend.categories)
        .then(response => {
            return response.data;
        });
    return response;
}

export const getAllCategories1 = async () => {
    const response = await axios.get(backend.categories)
    return response.data;
}