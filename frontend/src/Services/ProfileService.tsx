import axios from "axios";

const API_URL = "http://localhost:8080/profiles";

const getProfile = async (id: number) => {
    return axios.get(`${API_URL}/get/${id}`)
    .then(response => response.data)
    .catch(error => {
        throw error;
    });
}

const updateProfile = async (profile: any) => {
    return axios.put(`${API_URL}/update`, profile)
    .then(response => response.data)
    .catch(error => {
        throw error;
    });
}

export { getProfile, updateProfile };