import {CategoryResponse} from "@/types/category/Category.ts";
import axios from "axios";
import {frontend, backend} from "@/app/routes/routes.ts"

export const getAllProducts = () => {
    let returnProducts = [{} as ProductResponse];
    const response = axios
        .get(backend.productsGetAll)
        .then(response => {
            return response.data;
        });
    return response;
}
