export type UserQuery = {
    id: number;
    login: string;
    email: string;
    password: string;
}
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