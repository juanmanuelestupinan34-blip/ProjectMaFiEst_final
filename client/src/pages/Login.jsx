import { useState } from "react"
import { useNavigate } from "react-router-dom"
import loginService from "../services/login"
import Notification from "../components/Notification"
import "../styles/login.css"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState("")
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    const newErrors = {}
    if (!username) newErrors.username = "El correo es obligatorio."
    if (!password) newErrors.password = "La contraseña es obligatoria."
    setErrors(newErrors)
    setMessage("")

    if (Object.keys(newErrors).length === 0) {
      try {
        const userData = await loginService.login({ username, password })
        localStorage.setItem("user", JSON.stringify(userData))
        navigate("/")
      } catch (error) {
        setMessage(error.response?.data?.error || "Error al iniciar sesión. Intenta de nuevo.")
      }
    }
  }

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2 className="login-title">Iniciar sesión</h2>
        <Notification message={message}/>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Usuario</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
            />
            {errors.username && <p className="error">{errors.username}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          <button type="submit" className="btn-login">Entrar</button>
        </form>
      </div>
    </div>
  )
}

export default Login
