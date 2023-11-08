const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
  try {
    console.log('Middleware auth : Vérification du JWT.'); // Ajout d'un log

    const token = req.headers.authorization.split(' ')[1];
    console.log('JWT extrait de l\'en-tête :', token); // Ajout d'un log

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    console.log('JWT décodé :', decodedToken); // Ajout d'un log

    const userId = decodedToken.userId;
    req.auth = {
      userId: userId
    };
    console.log('Authentification réussie. Utilisateur ID :', userId); // Ajout d'un log

    next();
  } catch (error) {
    console.error('Erreur d\'authentification :', error); // Ajout d'un log d'erreur
    res.status(401).json({ error });
  }
};