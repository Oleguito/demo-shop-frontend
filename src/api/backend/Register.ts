import axios, { AxiosResponse } from "axios";
import * as routes from "@/app/routes/routes.ts";
import {RegisterCredentials, RegisterResponse} from "@/types/user/user.types.ts"


const REGISTER_USER_URL
    = `${routes.backendServerUrl}/users/add`;

export const registerUser = async (credentials: RegisterCredentials) => {
    return await axios
        .post(REGISTER_USER_URL, credentials)
        .then((response: AxiosResponse<RegisterResponse>) => {
            return response.data;
        });
};
