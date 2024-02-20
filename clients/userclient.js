import baseclient from "~/clients/baseclient.js";

export const getUsers = async () => {
    return baseclient.get('/user');
}

export const getUser = async (id) => {
    return baseclient.get(`/user/${id}`);
}

export const createUser = async (user) => {
    return baseclient.post('/user', user);
}

export const updateUser = async (id, user) => {
    return baseclient.put(`/user/${id}`, user);
}

export const deleteUser = async (id) => {
    return baseclient.delete(`/user/${id}`);
}