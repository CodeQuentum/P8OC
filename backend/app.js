const express = require('express');
const mongoose = require('mongoose');
const projectRoutes = require('./routes/projets');
const userRoutes = require('./routes/user');
const mailRoutes = require('./routes/mail');
require('dotenv').config();

const app = express();

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      console.log('Connecté à MongoDB');
    })
    .catch((error) => {
      console.error('Erreur de connexion à MongoDB :', error);
    });

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(express.json())

app.use('/api/projects', projectRoutes);
app.use('/api/auth', userRoutes);
app.use('/api/mail', mailRoutes);

module.exports = app;