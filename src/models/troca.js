const mongoose = require('mongoose');

const trocaSchema = new mongoose.Schema({
  estabelecimento: String, 
  endereco: String,
  horario: String,
  cep: String
});

const Troca = mongoose.model('Troca', trocaSchema);

module.exports = Troca;
