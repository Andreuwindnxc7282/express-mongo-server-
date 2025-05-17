const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

// Iniciar sesión
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ success: false, message: 'Credenciales inválidas' });
    }

    const payload = {
      id: user._id,
      email: user.email,
    };

    const token = jwt.sign(
      payload,
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRATION || '1h',
        issuer: process.env.JWT_ISSUER || 'default_issuer'
      }
    );

    res.json({ success: true, token });
  } catch (err) {
    next(err);
  }
};

// Registrar usuario
exports.register = async (req, res, next) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ success: true, data: user });
  } catch (err) {
    next(err);
  }
};