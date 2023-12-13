import axios from 'axios'

const API_BASE_URL = 'https://dummyjson.com/products'

export const getAllProducts = async (): Promise<any> => {
  try {
    const response = await axios.get(API_BASE_URL)
    return response.data
  } catch (error) {
    console.error('Error fetching all products:', error)
    throw error
  }
}

export const searchProducts = async (query: string): Promise<any> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/search?q=${query}`)
    return response.data
  } catch (error) {
    console.error(`Error searching products for query "${query}":`, error)
    throw error
  }
}
