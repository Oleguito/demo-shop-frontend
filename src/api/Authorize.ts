import axios, { AxiosResponse } from "axios";
import * as routes from "@/app/routes/routes";

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

export const authorizeUser = async (credentials: AuthorizeCredentials) => {
    console.log(`creds:${credentials.login} ${credentials.password}`);

    await getAllUsers().then((data) => {
        console.log(data);
        const foundUser = data.find((u) => u.login === credentials.login);
        console.log(foundUser);
        if(foundUser) {
            localStorage.setItem("currentUser", JSON.stringify(foundUser))
        }
    });


};

const getAllUsers = async () => {
    return await axios
        .get(GET_ALL_USERS_URL)
        .then((response: AxiosResponse<OneUser[]>) => {
            return response.data;
        });
};
