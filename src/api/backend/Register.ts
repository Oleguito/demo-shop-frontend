import axios, { AxiosResponse } from "axios";
import * as routes from "@/app/routes/routes.ts";
import {RegisterCredentials, RegisterResponse} from "@/types/user/user.types.ts"
import {returnBy} from "@/types/accountTypes/AccountTypes.ts";


const REGISTER_USER_URL
    = `${routes.backendServerUrl}/users/add`;

export const registerUser = async (credentials: RegisterCredentials) => {

    const toInput = { ...credentials,
        accountType: credentials.accountType.toString()
    };
    console.log(toInput);

    return await axios
        .post(REGISTER_USER_URL,
            toInput)
        .then((response: AxiosResponse<RegisterResponse>) => {
            return response.data;
        });
};
