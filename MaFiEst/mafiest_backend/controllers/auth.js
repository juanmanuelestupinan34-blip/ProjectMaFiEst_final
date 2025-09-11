const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

const authController = {
  // Registro de usuarios independientes
  async register(req, res) {
    const { name, email, password } = req.body;

    try {
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ error: "El correo ya está en uso." });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
        role: "independiente",
      });

      res
        .status(201)
        .json({ message: "Usuario registrado exitosamente.", userId: newUser.id });
    } catch (error) {
      res.status(500).json({ error: "Error al registrar el usuario." });
    }
  },

  // Inicio de sesión
  async login(req, res) {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(401).json({ error: "Credenciales inválidas." });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ error: "Credenciales inválidas." });
      }

      const token = jwt.sign(
        { id: user.id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      res.json({ token, userId: user.id, role: user.role });
    } catch (error) {
      res.status(500).json({ error: "Error al iniciar sesión." });
    }
  },

  // Cierre de sesión
  logout(req, res) {
    res.status(200).json({ message: "Sesión cerrada exitosamente." });
  },

  // Refresh de token
  refresh(req, res) {
    const { id, role } = req.user;
    const newToken = jwt.sign(
      { id, role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json({ token: newToken });
  },
};

module.exports = authController;
