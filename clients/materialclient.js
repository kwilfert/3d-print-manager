import baseClient from "~/clients/baseclient.js";

export const getMaterials = async () => {
    return baseClient.get('/materials');
}

export const getMaterial = async (id) => {
    return baseClient.get(`/materials/${id}`);
}

export const createMaterial = async (material) => {
    return baseClient.post("/materials", material);
}

export const updateMaterial = async (id, material) => {
    return baseClient.put(`/materials/${id}`, material);
}

export const deleteMaterial = async (id) => {
    return baseClient.delete(`/materials/${id}`);
}

export default {
    getMaterials,
    getMaterial,
    createMaterial,
    updateMaterial,
    deleteMaterial
}