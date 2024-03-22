import axios, {AxiosResponse} from "axios";
import * as routes from "@/app/routes/routes";
import Cookies from "js-cookie";
import {UserQuery} from "@/types/UserQuery";

export type AuthorizeCredentials = {
    login: string;
    password: string;
};

export type AuthorizeResponse = {
    users: UserQuery[];
};
type AuthorizationResultInfo = {
    status: number;
    userId: number;
};

const GET_ALL_USERS_URL = `${routes.serverUrl}/users`;

export async function getOneUser(login: string) {
    return await getAllUsers().then((data) => {
        return data.find((u) => u.login === login);
    })
}

export const authorizeUser = async (credentials: AuthorizeCredentials, rememberMe: boolean) => {
    return getOneUser(credentials.login).then((u:UserQuery | undefined)=>{
        if (u && rememberMe) {
            Cookies.set("currentUserId", "" + u.id);
        }
        return u;
    });
};

const getAllUsers = async () => {
    return await axios
        .get(GET_ALL_USERS_URL)
        .then((response: AxiosResponse<UserQuery[]>) => {
            return response.data;
        });
};
