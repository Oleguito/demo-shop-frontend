export const backendServerUrl = "http://localhost:8080";
export const backend = {
    backendServerUrl,
    addUser: backendServerUrl + '/users/add',

    categoriesPostOne: backendServerUrl + '/categories/add',
    categoriesAddProductTo: backendServerUrl + '/categories/add-product',
    categories: backendServerUrl + '/categories',
    categoriesGetAll: backendServerUrl + '/categories',
    categoriesGetOne: backendServerUrl + '/categories/{id}',
    categoriesDelete: backendServerUrl + '/categories/delete/{id}',

    usersGetOne: backendServerUrl + '/users/{id}',
    usersUpdateOne: backendServerUrl + '/users/{id}',
    usersAddProductToProductBin: backendServerUrl + '/users/{id}/product-bin-add',
    usersAddUser: backendServerUrl + '/users/add',
    usersGetAll: backendServerUrl + '/users',
    usersGetProductBin: backendServerUrl + '/users/{id}/product-bin',
    usersDeleteProductFromProductBin: backendServerUrl + '/users/{id}',
    usersDeleteUser: backendServerUrl + '/users/delete/{id}',

    purchasesAddPurchase: backendServerUrl + "/purchases/add",

    productsAddProduct: backendServerUrl + "/products/add",
    productsGetAll: backendServerUrl + "/products/all",
};

export const frontend = {
    adminProfilePage: "/adminProfile",
    profilePage: "/profile",
    register: '/register',
}
