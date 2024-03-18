import axios, { AxiosResponse } from "axios";
import * as routes from "@/app/routes/routes";

export type RegisterCredentials = {
    login: string;
    password: string;
    email: string; 
};
export type RegisterResponse = {
    id: number;
    login: string;
    password: string;
    email: string;
};

const REGISTER_USER_URL = `${routes.serverUrl}/users/add`;

export const registerUser = async (credentials: RegisterCredentials) => {
    return await axios
        .post(REGISTER_USER_URL, credentials)
        .then((response: AxiosResponse<RegisterResponse>) => {
            return response.data;
        });
};
