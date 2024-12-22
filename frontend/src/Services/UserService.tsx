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

const changePassword = async (email: string, password: string) => {
    return axios.post(`${API_URL}/change-password`, { email, password })
    .then(response => response.data)
    .catch(error => {
        throw error;
    });
}

const sendOTP = async (email: string) => {
    return axios.post(`${API_URL}/send-otp/${email}`)
    .then(response => response.data)
    .catch(error => {
        throw error;
    });
}

const verifyOTP = async (email: string, otp: string) => {
    return axios.get(`${API_URL}/verify-otp/${email}/${otp}`)
    .then(response => response.data)
    .catch(error => {
        throw error;
    });
}

export { registerUser, loginUser, changePassword, sendOTP, verifyOTP };