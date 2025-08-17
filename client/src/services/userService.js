import axios from 'axios'
const baseUrl = '/api/users'

// Obtener todos los usuarios
const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

// Crear un nuevo usuario (requiere token de admin)
const create = async (newUser, token) => {
  const config = { headers: { Authorization: `Bearer ${token}` } }
  const response = await axios.post(baseUrl, newUser, config)
  return response.data
}

export default { getAll, create }
