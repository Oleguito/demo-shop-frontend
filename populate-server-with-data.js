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
const categoryEquipment = {
    title: "Eqipment"
}

// post(`${backendServerUrl}/users/add`, createAdminUser);
// post(`${backendServerUrl}/users/add`, createNormalUser);
// post(`${backendServerUrl}/categories/add`, categoryFoods);
// post(`${backendServerUrl}/categories/add`, categoryServices);
// post(`${backendServerUrl}/categories/add`, categoryEqipment);
// post(`${backendServerUrl}/categories/add`, categoryTools);

axios.get(`${backendServerUrl}/categories`).then(data => {
    const catFoods = data.data.find(item => {return item.id === categoryFoods.id})
    const catServices = data.data.find(item => {return item.id === categoryServices.id})
    const catEquipment = data.data.find(item => {return item.id === categoryEquipment.id})
    const catTools = data.data.find(item => {return item.id === categoryTools.id})

    // post(`${backendServerUrl}/products/add`, {
    //     title: "Hammer",
    //     category: catTools });
    // post(`${backendServerUrl}/products/add`, {
    //     title: "Nails",
    //     category: catTools });
    // post(`${backendServerUrl}/products/add`, {
    //     title: "Pliers",
    //     category: catTools });
    // post(`${backendServerUrl}/products/add`, {
    //     title: "Saw",
    //     category: catTools });
    //
    // post(`${backendServerUrl}/products/add`, {
    //     title: "Escort",
    //     category: catServices });
    // post(`${backendServerUrl}/products/add`, {
    //     title: "Handyman for an hour",
    //     category: catServices });
    // post(`${backendServerUrl}/products/add`, {
    //     title: "Handyman for an hour",
    //     category: catServices });

    post(`${backendServerUrl}/products/add`, {
        title: "Gaming steering wheel",
        category: catEquipment });
    post(`${backendServerUrl}/products/add`, {
        title: "Spacesuit",
        category: catEquipment });
    post(`${backendServerUrl}/products/add`, {
        title: "TV",
        category: catEquipment });
    post(`${backendServerUrl}/products/add`, {
        title: "Time machine",
        category: catEquipment });
});


function post(where, what) {
    axios.post(where, what)
        .then(response => {
            console.log("post response:", response.data);
        })
        .catch(error => {
            console.error(error);
        });
}

