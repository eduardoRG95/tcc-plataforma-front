import api from './api';

export default async function ListCart(url, data) {
    const response = await api.get(url, data)
    return response;
}