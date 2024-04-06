import {UserCommand, UserQuery} from "@/types/user/user.types.ts";
import axios, { AxiosResponse } from "axios";
import * as constants from "@/constants/constants.ts";
import {backend} from "@/app/routes/routes.ts";
import { ProductQuery } from '@/types/product/product.types.ts';
import { toast } from 'sonner';

export async function getUserById(id: number): Promise<UserQuery> {
    const url = `${backend.backendServerUrl}/users/${id}`;
    const response = await axios.get(url);
    return response.data as UserQuery;
}

export function deleteUserById(id: number) {
    axios.delete(backend.usersDeleteUser(id)).then(
      r => console.log(r)
    );
}

export function getUserByIdNotAsync(id: number | undefined): UserQuery {
    const url = `${backend.backendServerUrl}/users/${id}`;
    let result: UserQuery = {} as UserQuery;
    axios
        .get(url)
        .then((response: AxiosResponse<UserQuery>) => {
            result = response.data;
        })
    return result;
}

export function getAllUsers(): Promise<UserQuery[]> {
    const url = `${backend.backendServerUrl}/users`;
    return axios
        .get(url)
        .then((response: AxiosResponse<UserQuery[]>) => {
            return response.data;
        });
}

export function modifyAUserById(id:number, userData: UserCommand) {
    const url = `${backend.backendServerUrl}/users/${id}`;
    return axios
        .put(url, userData)
        .then((response: AxiosResponse<UserQuery>) => {
            return response.data;
        });
}

export function putProductInCurrentUsersProductBin(userId : number, product: ProductQuery) {
    const url = backend.usersAddProductToProductBin(userId);
    return axios
      .post(url, product).then(
        response => response.data
      );
}

export function removeProductFromCurrentUsersProductBin(userId: number, productId: number) {
    return axios
      .delete(backend.usersDeleteProductFromProductBin(userId, productId))
      .then(r => {
            toast("Successfully deleted! Please refresh the page ;)");
        }
      )
}