import apiClient from './client'

const endpoint = '/categories'
const getCategories = () => {
    return apiClient.get(endpoint)
}

export default { getCategories }