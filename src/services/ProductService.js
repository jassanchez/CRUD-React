import axios from "axios";

const API_URL_BASE = "http://localhost:8080/api";

const initProduct = [
    {
        id: 1,
        name: 'Samsung Wide Monitor',
        price: 500,
        description: 'Ultra Wide 140Hz'
    },
    {
        id: 2,
        name: 'Razer Mouse',
        price: 100,
        description: 'Cost-benefit'
    }
];

export const listProduct = () => {
    return initProduct;
}

export const findAll = async () => {
    const response = await axios.get(API_URL_BASE)
        .catch(e => console.log(e));

    return response;
}

export const create = async ({ name, description, price }) => {
    const response = axios.post(API_URL_BASE, {
        name: name,
        description: description,
        price: price
    }).catch(e => console.log(e));

    return response;
}

export const update = async ({ id, name, description, price }) => {
    const response = axios.put(API_URL_BASE + "/" + id, {
        name: name,
        description: description,
        price: price
    }).catch(e => console.log(e));

    return response;
}

export const remove = async (id) => {
    const response = axios.delete(API_URL_BASE + "/" + id).catch(e => console.log(e));

    return response;
}