import {AccountTypes} from "@/types/accountTypes/AccountTypes.ts";
import {Purchase} from "@/api/backend/Purchase.ts";
import {ProductBin} from "@/api/backend/ProductBin.ts";

export type UserQuery = {
    id: number;
    login: string;
    email: string;
    password: string;
    accountType: AccountTypes;
    productBin: ProductBin;
    purchases: Purchase[];
}
export type UserCommand = {
    login: string;
    email: string;
    password: string;
    accountType: AccountTypes;
    productBin: ProductBin;
    purchases: Purchase[];
}
export type UpdateUserRequest = {
    login: string;
    email: string;
    password: string;
    accountType: AccountTypes;
    productBin: ProductBin;
    purchases: Purchase[];
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