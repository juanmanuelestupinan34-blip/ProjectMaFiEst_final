const bcrypt = require("bcrypt");
const User = require("../models/User");
const { authenticate } = require("../utils/authMiddleware");

// =========================
// GET → Obtener todos los usuarios
// =========================
exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "username", "name", "email", "role"],
    });
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// =========================
// POST → Crear un nuevo usuario
// =========================
exports.createUser = async (req, res) => {
  try {
    const { username, name, email, password, role } = req.body;

    const usersCount = await User.count();

    if (!password || password.length < 8) {
      return res.status(400).json({ error: "La contraseña debe tener al menos 8 caracteres" });
    }

    // Primer usuario siempre será admin
    let finalRole = "admin";

    if (usersCount > 0) {
      // Debe estar autenticado
      const authUser = req.user;
      if (!authUser || authUser.role !== "admin") {
        return res.status(403).json({ error: "Acceso denegado: solo el administrador puede crear usuarios" });
      }

      // Si es admin puede asignar rol
      finalRole = role || "student";
    }

    // Hash password
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const newUser = await User.create({
      username,
      name,
      email,
      role: finalRole,
      passwordHash,
    });

    res.status(201).json(newUser);
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(400).json({ error: "El usuario o correo ya está registrado" });
    }
    res.status(500).json({ error: error.message });
  }
};

// =========================
// DELETE → Eliminar un usuario
// =========================
exports.deleteUser = async (req, res) => {
  try {
    const authUser = req.user;

    if (!authUser || authUser.role !== "admin") {
      return res.status(403).json({ error: "Acción denegada: solo el administrador puede eliminar usuarios" });
    }

    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    await user.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
