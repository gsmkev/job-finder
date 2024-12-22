import axios from "axios";

const API_URL = "http://localhost:8080/users";

const registerUser = async (user: any) => {
    return axios.post(`${API_URL}/register`, user)
    .then(response => response.data)
    .catch(error => {
        throw error;
    });
}

const loginUser = async (login: any) => {
    return axios.post(`${API_URL}/login`, login)
    .then(response => response.data)
    .catch(error => {
        throw error;
    });
}

export { registerUser, loginUser };