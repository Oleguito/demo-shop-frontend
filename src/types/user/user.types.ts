export type UserQuery = {
    id: number;
    login: string;
    email: string;
    password: string;
    accountType: string;
}
export type RegisterCredentials = {
    login: string;
    password: string;
    email: string;
    accountType: string;
};
export type RegisterResponse = {
    id: number;
    login: string;
    password: string;
    email: string;
    accountType: string;
};