const mongoose = require('mongoose');

const projetSchema = new mongoose.Schema({
  title: {type: String,required: true},
  description: {type: String,required: true},
  tags: {type: [String],required: true},
  repo: {type: String,required: true},
  figma: {type: String,required: true}
});

const Projet = mongoose.model('Projet', projetSchema);

module.exports = Projet;
