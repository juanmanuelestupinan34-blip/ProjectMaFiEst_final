const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const RefreshToken = require("../models/RefreshToken");

// =========================
// REGISTRO (solo independientes)
// =========================
exports.register = async (req, res) => {
  try {
    const { username, name, email, password } = req.body;

    if (!password || password.length < 8) {
      return res.status(400).json({ error: "La contraseña debe tener al menos 8 caracteres" });
    }

    // verificar duplicados
    const existing = await User.findOne({ where: { email } });
    if (existing) {
      return res.status(400).json({ error: "El correo ya está registrado" });
    }

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    // independiente se registra solo
    const user = await User.create({
      username,
      name,
      email,
      role: "independent",
      passwordHash,
    });

    res.status(201).json({
      message: "Usuario independiente registrado con éxito",
      user: { id: user.id, username: user.username, email: user.email, role: user.role },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// =========================
// LOGIN
// =========================
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(401).json({ error: "Usuario no encontrado" });

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) return res.status(401).json({ error: "Contraseña incorrecta" });

    // Access token (expira 1h)
    const accessToken = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.ACCESS_TOKEN_EXPIRES || "1h" }
    );

    // Refresh token (expira 7d)
    const refreshToken = jwt.sign(
      { id: user.id },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: process.env.REFRESH_TOKEN_EXPIRES || "7d" }
    );

    // Guardar refreshToken en la BD
    await RefreshToken.create({ token: refreshToken, userId: user.id });

    res.json({ accessToken, refreshToken, role: user.role });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// =========================
// REFRESH TOKEN
// =========================
exports.refresh = async (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) return res.status(401).json({ error: "Falta refreshToken" });

  const saved = await RefreshToken.findOne({ where: { token: refreshToken } });
  if (!saved) return res.status(403).json({ error: "RefreshToken inválido" });

  jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: "RefreshToken expirado" });

    const newAccessToken = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.ACCESS_TOKEN_EXPIRES || "1h" }
    );

    res.json({ accessToken: newAccessToken });
  });
};

// =========================
// LOGOUT
// =========================
exports.logout = async (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) return res.sendStatus(400);

  await RefreshToken.destroy({ where: { token: refreshToken } });
  res.json({ message: "Sesión cerrada correctamente" });
};

