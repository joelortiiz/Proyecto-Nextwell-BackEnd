// src/app.js
const express = require('express');
const gpuRoutes = require('./routes/gpuRoutes');

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api/gpus', gpuRoutes);

module.exports = app;
