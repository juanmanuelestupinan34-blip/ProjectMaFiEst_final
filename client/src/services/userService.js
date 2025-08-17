import axios from "axios"
const baseUrl = "/api/users"

let token = null

// Configura el token una sola vez
const setToken = newToken => {
  token = `Bearer ${newToken}`
}

// Obtener todos los usuarios
const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

// Crear un nuevo usuario usando el token configurado
const create = async (newUser) => {
  if (!token) throw new Error("No se ha configurado el token")
  const config = { headers: { Authorization: token } }
  const response = await axios.post(baseUrl, newUser, config)
  return response.data
}

export default { setToken, getAll, create }
