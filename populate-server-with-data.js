const axios= require('axios');

const backendServerUrl = 'http://localhost:8080';

const createAdminUser = {
    login: 'Oleguito',
    password: '123456789',
    email: 'oleguito@ramber.ru',
    accountType: 'ADMIN'
};
const createNormalUser = {
    login: 'Oleguote',
    password: '123456789',
    email: 'oleguito@gmail.com',
    accountType: 'USER'
};
const categoryFoods = {
    title: "Foods"
}
const categoryServices = {
    title: "Services"
}
const categoryTools = {
    title: "Tools"
}
const categoryEqipment = {
    title: "Eqipment"
}



post(`${backendServerUrl}/users/add`, createAdminUser);
post(`${backendServerUrl}/users/add`, createNormalUser);
post(`${backendServerUrl}/categories/add`, categoryFoods);
post(`${backendServerUrl}/categories/add`, categoryServices);
post(`${backendServerUrl}/categories/add`, categoryEqipment);
post(`${backendServerUrl}/categories/add`, categoryTools);

function post(where, what) {
    axios.post(where, what)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
}

