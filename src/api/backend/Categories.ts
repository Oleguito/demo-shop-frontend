import { CategoryResponse, ModifyCategoryRequest } from '@/types/category/Category.ts';
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

export const getCategoryById = (categoryId: number) => {
    return axios.get(backend.categoriesGetOne(categoryId)).then((response) => {
        return response.data;
    })
}

export function deleteCategoryById(id: number) {
    axios.delete(backend.categoriesDeleteById(id));
}

export function modifyCategory(categoryToModifyId:number, newData: ModifyCategoryRequest) {
    return axios.put(backend.categoriesModifyById(categoryToModifyId), newData).then(
      response => response.data
    ).catch(
      error => console.log(error)
    )
}