export const backendServerUrl = "http://localhost:8080";
export const backend = {
    backendServerUrl,
    addUser: backendServerUrl + '/users/add',

    categoriesPostOne: backendServerUrl + '/categories/add',
    categoriesAddProductTo: backendServerUrl + '/categories/add-product',
    categories: backendServerUrl + '/categories',
    categoriesGetAll: backendServerUrl + '/categories',
    categoriesGetOne: (id: number) => {
        return `${backendServerUrl}/categories/{$id}`;
    },
    categoriesDelete: (id:number) => {
        return `${backendServerUrl}/categories/delete/${id}`
    },
    usersGetOne     :(id: number) => `${backendServerUrl}/users/${id}`,
    usersUpdateOne  :(id: number) => `${backendServerUrl}/users/${id}`,
    usersAddProductToProductBin :(id: number) => `${backendServerUrl}/users/${id}/product-bin-add`,
    usersAddUser :() => `${backendServerUrl}/users/add`,
    usersGetAll :() => `${backendServerUrl}/users`,
    usersGetProductBin :(id: number) => `${backendServerUrl}/users/${id}/product-bin`,
    usersDeleteProductFromProductBin :(id: number) => `${backendServerUrl}/users/${id}`,
    usersDeleteUser :(id: number) => `${backendServerUrl}/users/delete/${id}`,

    purchasesAddPurchase: backendServerUrl + "/purchases/add",

    productsAddProduct: backendServerUrl + "/products/add",
    productsGetAll: backendServerUrl + "/products/all",
};

export const frontend = {
    adminProfilePage: "/adminProfile",
    profilePage: "/profile",
    register: '/register',
}
