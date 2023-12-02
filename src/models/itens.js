const mongoose = require('mongoose');

const itensSchema = new mongoose.Schema({
  nome: String,
  descricao: String,
  valorPontos: Number,
});

const Itens = mongoose.model('Itens', itensSchema);

module.exports = Itens;