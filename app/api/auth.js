import apiClient from './client';

const apiEndPoint = "/token/";
const tokenKey = "token"

async function login(username, password) {
    const response = await apiClient.post(apiEndPoint, { username, password });
    //localStorage.setItem(tokenKey, data['access'])
    return response
}

export default { login }