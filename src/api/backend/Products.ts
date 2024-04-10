import { CategoryResponse } from '@/types/category/Category.ts';
import axios, {AxiosResponse} from 'axios';
import { frontend, backend } from '@/app/routes/routes.ts';
import {
  ProductCommand,
  ProductQuery,
  ProductRequest,
  ProductResponse,
} from '@/types/product/product.types.ts';

export const getAllProducts = () => {
  let returnProducts = [{} as ProductResponse];
  const response = axios.get(backend.productsGetAll).then((response) => {
    return response.data;
  });
  return response;
};

export function createAProduct(newProduct: ProductCommand) {
  return axios
    .post(backend.productsAddProduct, newProduct)
    .then((response) => {
      return response.data;
  })
}

export function deleteProductById(id: number) {
  return axios
    .delete(backend.productsDeleteById(id))
    .then((response) => {
      return response.data;
    })
}

export function updateProductById(id: number, data: ProductCommand) {
  return axios
    .put(backend.productsUpdateById(id), data)
    .then((response) => {
      return response.data;
    })
}