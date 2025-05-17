const Papa = require('../models/papa.model');

exports.getAll = async (req, res, next) => {
  try {
    const papas = await Papa.find();
    res.json({ success: true, data: papas });
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const papa = new Papa(req.body);
    await papa.save();
    res.status(201).json({ success: true, data: papa });
  } catch (err) {
    next(err);
  }
};

exports.vote = async (req, res, next) => {
  try {
    const papa = await Papa.findByIdAndUpdate(
      req.params.id,
      { $inc: { votes: 1 } },
      { new: true }
    );
    if (!papa) return res.status(404).json({ success: false, message: 'Papa no encontrada' });
    res.json({ success: true, data: papa });
  } catch (err) {
    next(err);
  }
};