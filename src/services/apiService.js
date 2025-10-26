import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com' // Replace with your actual base URL

// GET request
export const getData = async (endpoint, params = {}) => {
    try {
        const response = await axios.get(`${BASE_URL}${endpoint}`, { params })
        return response.data
    } catch (error) {
        console.error('GET error:', error)
        throw error
    }
}

// POST request
export const postData = async (endpoint, payload) => {
    try {
        const response = await axios.post(`${BASE_URL}${endpoint}`, payload)
        return response.data
    } catch (error) {
        console.error('POST error:', error)
        throw error
    }
}

// PUT request
export const putData = async (endpoint, payload) => {
    try {
        const response = await axios.put(`${BASE_URL}${endpoint}`, payload)
        return response.data
    } catch (error) {
        console.error('PUT error:', error)
        throw error
    }
}

// DELETE request
export const deleteData = async (endpoint) => {
    try {
        const response = await axios.delete(`${BASE_URL}${endpoint}`)
        return response.data
    } catch (error) {
        console.error('DELETE error:', error)
        throw error
    }
}