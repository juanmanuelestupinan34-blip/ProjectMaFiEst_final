import { useState } from "react"
import { useNavigate } from "react-router-dom"
import loginService from "../services/login"
import "../styles/login.css"

const Login = () => {
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})
  const [apiError, setApiError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = {}
    if (!username) newErrors.username = "El correo es obligatorio."
    if (!password) newErrors.password = "La contraseña es obligatoria."
    setErrors(newErrors)
    setApiError("")

    if (Object.keys(newErrors).length === 0) {
      try {
        const userData = await loginService.login({ username, password })
        localStorage.setItem("user", JSON.stringify(userData))
        navigate("/")
      } catch (error) {
        setApiError(
          error.response?.data?.error || "Error al iniciar sesión. Intenta de nuevo."
        )
      }
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>
        {apiError && <p className="error">{apiError}</p>}

        <div className="form-group">
          <label>Correo</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>

        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <button type="submit" className="btn-login">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login
