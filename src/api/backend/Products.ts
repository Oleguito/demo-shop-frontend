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
    .put(backend.productsAddProduct, newProduct)
    .then((response) => {
      return response.data;
  })
}
