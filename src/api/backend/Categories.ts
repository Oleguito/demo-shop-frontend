import {CategoryResponse} from "@/types/category/Category.ts";
import axios from "axios";
import {frontend, backend} from "@/app/routes/routes.ts"

export const getAllCategories = () => {
    let returnCategories = [{} as CategoryResponse];
    const response = axios
        .get(backend.categories)
        .then(response => {
            return response.data;
        });
    return response;
}

export const postOneCategory = (categoryCommand: {categoryName: string}) => {
    let categoryResponse = {} as CategoryResponse;
    const response = axios
        .post(backend.categoriesPostOne, {
            title: categoryCommand.categoryName
        })
        .then((response) => {
            categoryResponse = response.data;
        })
    return categoryResponse;
}