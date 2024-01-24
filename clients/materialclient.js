import baseClient from "~/clients/baseclient.js";

const getMaterials = async () => {
    return baseClient.get('/materials');
}

const getMaterial = async (id) => {
    return baseClient.get(`/materials/${id}`);
}

const createMaterial = async (material) => {
    return baseClient.post("/materials", material);
}

const updateMaterial = async (id, material) => {
    return baseClient.put(`/materials/${id}`, material);
}

const deleteMaterial = async (id) => {
    return baseClient.delete(`/materials/${id}`);
}

export default {
    getMaterials,
    getMaterial,
    createMaterial,
    updateMaterial,
    deleteMaterial
}