import {UserQuery} from "@/types/UserQuery";
import axios, { AxiosResponse } from "axios";
import * as constants from "@/constants/constants";
import {routes} from "@/app/routes/routes";

export async function getUserById(id: number): Promise<UserQuery> {
    const url = `${routes.serverUrl}/users/${id}`;
    const response = await axios.get(url);
    return response.data as UserQuery;
}

export function getUserByIdNotAsync(id: number | undefined): UserQuery {
    const url = `${routes.serverUrl}/users/${id}`;
    let result: UserQuery = {} as UserQuery;
    axios
        .get(url)
        .then((response: AxiosResponse<UserQuery>) => {
            result = response.data;
        })
    return result;
}