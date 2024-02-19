import baseClient from "./baseclient.js";

export const getModels = async () => {
    return baseClient.get('/models');
}

export const getModel = async (id) => {
    return baseClient.get(`/models/${id}`);
}

// this one takes formData
export const createModel = async (model) => {
    console.log(JSON.stringify(model, null ,3))
    return baseClient.post('/models', model, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    });
}

// this one takes formData
export const updateModel = async (id, model) => {
    return baseClient.put(`/models/${id}`, model, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    });
}

export const deleteModel = async (id) => {
    return baseClient.delete(`/models/${id}`);
}

export default {getModels, getModel, createModel, updateModel, deleteModel}