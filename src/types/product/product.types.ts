import {CategoryRequest, CategoryResponse} from "@/types/category/Category.ts";

export type ProductRequest = {
    title: string;
    categoryTitle: string;
}

export type ProductCommand = {
    title: string;
    category: CategoryResponse;
}

export type ProductResponse = {
    id: number;
    title: string;
    category: CategoryResponse;
}

export type ProductQuery = {
    id: number;
    title: string;
    category: CategoryResponse;
}