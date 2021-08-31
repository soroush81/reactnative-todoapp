import apiClient from './client'

const endpoint = '/todos'
const getTodos = () => {
    return apiClient.get(endpoint)
}

export default { getTodos }