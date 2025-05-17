const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const papasRoutes = require('./routes/papas.routes');
const errorHandler = require('./middlewares/error.middleware');

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Conectado a la base de datos"))
  .catch(err => console.error("Error de conexión a la base de datos", err));

app.use(express.json());
app.use(express.static('public'));

app.use('/api/papas', papasRoutes);

app.use((req, res, next) => {
  res.status(404).json({ success: false, message: 'No se encontró la ruta solicitada' });
});

app.use(errorHandler);

module.exports = app;