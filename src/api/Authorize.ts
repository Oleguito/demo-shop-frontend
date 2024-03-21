import axios, { AxiosResponse } from "axios";
import * as routes from "@/app/routes/routes";
import Cookies from "js-cookie";
import {GlobalContext} from "@/app/context/GlobalContext";
import {useContext} from "react";

export type AuthorizeCredentials = {
    login: string;
    password: string;
};

type OneUser = {
    id: number;
    login: string;
    password: string;
    email: string;
};
export type AuthorizeResponse = {
    users: OneUser[];
};
type AuthorizationResultInfo = {
    status: number;
    userId: number;
};

const GET_ALL_USERS_URL = `${routes.serverUrl}/users`;

export const authorizeUser = async (credentials: AuthorizeCredentials, rememberMe: boolean) => {

    return await getAllUsers().then((data) => {
        const foundUser = data.find((u) => u.login === credentials.login);
        if(foundUser && rememberMe) {
            Cookies.set("currentUserId", ""+foundUser.id);
        }
        return foundUser;
    });


};

const getAllUsers = async () => {
    return await axios
        .get(GET_ALL_USERS_URL)
        .then((response: AxiosResponse<OneUser[]>) => {
            return response.data;
        });
};
