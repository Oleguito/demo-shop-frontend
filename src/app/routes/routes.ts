export const backendServerUrl = 'http://localhost:8080';
export const backend = {
  backendServerUrl,
  addUser: backendServerUrl + '/users/add',

  categoriesPostOne: backendServerUrl + '/categories/add',
  categoriesAddProductTo: backendServerUrl + '/categories/add-product',
  categories: backendServerUrl + '/categories',
  categoriesGetAll: backendServerUrl + '/categories',

  categoriesModifyById: (id: number) => {
    return `${backendServerUrl}/categories/modify/${id}`;
  },
  categoriesGetOne: (id: number) => {
    return `${backendServerUrl}/categories/${id}`;
  },
  categoriesDeleteById: (id: number) => {
    return `${backendServerUrl}/categories/delete/${id}`;
  },
  categoriesDeleteByTitle: (title: string) => {
    return `${backendServerUrl}/categories/${title}`;
  },
  usersGetOne: (id: number) => `${backendServerUrl}/users/${id}`,
  usersUpdateOne: (id: number) => `${backendServerUrl}/users/${id}`,
  usersAddProductToProductBin: (id: number) =>
    `${backendServerUrl}/users/${id}/product-bin/add`,
  usersAddUser: () => `${backendServerUrl}/users/add`,
  usersGetAll: () => `${backendServerUrl}/users`,
  usersGetProductBin: (id: number) =>
    `${backendServerUrl}/users/${id}/product-bin`,
  usersDeleteProductFromProductBin: (userId: number, productId: number) => {
    return `${backendServerUrl}/users/${userId}/product-bin/delete/${productId}`;
  },
  usersDeleteUser: (id: number) => `${backendServerUrl}/users/delete/${id}`,

  purchasesAddPurchase: backendServerUrl + '/purchases/add',

  productsAddProduct: backendServerUrl + '/products/add',
  productsGetAll: backendServerUrl + '/products/all',
  productsDeleteById: (id: number) => {
    return `${backendServerUrl}/products/delete/${id}`;
  },
  productsUpdateById: (id: number) => {
    return `${backendServerUrl}/products/update/${id}`;
  },
};

export const frontend = {
  adminProfilePage: '/adminProfile',
  profilePage: '/profile',
  register: '/register',
  updateCategory: (id: number) => {
    return `/categories/modify/${id}`;
  },
  updateUser: (id: number) => {
    return `/users/update/${id}`;
  },
  updateProduct(id: number) {
    return `/products/update/${id}`;
  }
};
