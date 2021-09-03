import apiClient from './client';

const apiEndPoint = "/token/";
const tokenKey = "token"

export async function login(username, password) {
    const { data } = await apiClient.post(apiEndPoint, { username, password });
    localStorage.setItem(tokenKey, data['access'])
    return data
}