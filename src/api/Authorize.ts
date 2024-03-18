import axios, { AxiosResponse } from "axios";
import * as routes from "@/app/routes/routes";

export type AuthorizeCredentials = {
    login: string;
    password: string;
    email: string; 
};
export type AuthorizeResponse = {
    id: number;
    login: string;
    password: string;
    email: string;
};

const AUTHORIZE_USER_URL = `${routes.serverUrl}/users/add`;

export const AuthorizeUser = async (credentials: AuthorizeCredentials) => {
    return await axios
        .post(AUTHORIZE_USER_URL, credentials)
        .then((response: AxiosResponse<AuthorizeResponse>) => {
            return response.data;
        });
};
