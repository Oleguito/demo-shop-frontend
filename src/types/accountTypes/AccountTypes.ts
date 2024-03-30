export enum AccountTypes {
    ADMIN = "ADMIN",
    USER = "USER",
    GUEST = "GUEST",
}

export function returnBy(name: string) {
    switch (name) {
        case "ADMIN": return AccountTypes.ADMIN;
        case "USER": return AccountTypes.USER;
        default:
            return AccountTypes.GUEST;
    }
}