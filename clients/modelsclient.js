import baseClient from "./baseclient.js";

export const getModels = async () => {
    return baseClient.get('/models');
}

export const getModel = async (id) => {
    return baseClient.get(`/models/${id}`);
}

export const createModel = async (model) => {
    return baseClient.post('/models', model);
}

export const updateModel = async (id, model) => {
    return baseClient.put(`/models/${id}`, model);
}

export const deleteModel = async (id) => {
    return baseClient.delete(`/models/${id}`);
}

export default {getModels, getModel, createModel, updateModel, deleteModel}