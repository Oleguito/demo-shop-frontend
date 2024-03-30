import {AccountTypes} from "@/types/accountTypes/AccountTypes.ts";

export type UserQuery = {
    id: number;
    login: string;
    email: string;
    password: string;
    accountType: AccountTypes;
}
export type RegisterCredentials = {
    login: string;
    password: string;
    email: string;
    accountType: AccountTypes;
};
export type RegisterResponse = {
    id: number;
    login: string;
    password: string;
    email: string;
    accountType: AccountTypes;
};