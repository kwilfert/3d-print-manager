import baseClient from "~/clients/baseclient.js";


export const getTags = async () => {
    return baseClient.get('/tags');
}

export const getTag = async (id) => {
    return baseClient.get(`/tags/${id}`);
}

export const createTag = async (tag) => {
    return baseClient.post('/tags', tag);
}

export const updateTag = async (id, tag) => {
    return baseClient.put(`/tags/${id}`, tag);
}

export const deleteTag = async (id) => {
    return baseClient.delete(`/tags/${id}`);
}

export default {getTags, getTag, createTag, updateTag, deleteTag}