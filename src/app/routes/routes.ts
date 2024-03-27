export const backendServerUrl = "http://localhost:8080";
export const backend = {
    backendServerUrl,
    addUser: backendServerUrl + "/users/add",
    categories: backendServerUrl + "/categories",
    register: backendServerUrl + "/register",
}

export const frontend = {
    adminProfilePage: "/adminProfile",
    profilePage: "/profile",
}
