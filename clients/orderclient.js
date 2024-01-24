import baseclient from "~/clients/baseclient.js";

export const getOrders = async () => {
    return baseclient.get('/orders');
}

export const getOrder = async (id) => {
    return baseclient.get(`/orders/${id}`);
}

export const createOrder = async (order) => {
    return baseclient.post('/orders', order);
}

export const updateOrder = async (id, order) => {
    return baseclient.put(`/orders/${id}`, order);
}

export const deleteOrder = async (id) => {
    return baseclient.delete(`/orders/${id}`);
}