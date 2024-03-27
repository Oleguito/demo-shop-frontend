import {UserQuery} from "@/types/user/user.types.ts";
import axios, { AxiosResponse } from "axios";
import * as constants from "@/constants/constants";
import {backend} from "@/app/routes/routes.ts";

export async function getUserById(id: number): Promise<UserQuery> {
    const url = `${backend.backendServerUrl}/users/${id}`;
    const response = await axios.get(url);
    return response.data as UserQuery;
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