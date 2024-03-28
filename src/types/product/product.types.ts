import {CategoryRequest, CategoryResponse} from "@/types/category/Category.ts";

export type ProductRequest = {
    title: string;
}

export type ProductResponse = {
    id: number;
    title: string;
    category: CategoryResponse;
}

