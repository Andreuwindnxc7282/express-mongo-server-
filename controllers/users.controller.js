const User = require('../models/user.model');

// Obtener todos los usuarios
exports.getAll = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json({ success: true, data: users });
  } catch (err) {
    next(err);
  }
};

// Obtener un usuario por ID
exports.getById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ success: false, message: 'Usuario no encontrado' });
    res.json({ success: true, data: user });
  } catch (err) {
    next(err);
  }
};

// Crear un nuevo usuario
exports.create = async (req, res, next) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ success: true, data: user });
  } catch (err) {
    next(err);
  }
};

// Actualizar un usuario
exports.update = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) return res.status(404).json({ success: false, message: 'Usuario no encontrado' });
    res.json({ success: true, data: user });
  } catch (err) {
    next(err);
  }
};

// Eliminar un usuario
exports.remove = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ success: false, message: 'Usuario no encontrado' });
    res.json({ success: true, message: 'Usuario eliminado' });
  } catch (err) {
    next(err);
  }
};