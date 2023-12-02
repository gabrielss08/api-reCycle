require('./db');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usuarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  sobrenome: {
    type: String,
    required: true,
  },
  dataNascimento: Date,
  telefone: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  senha: {
    type: String,
    required: true,
  },
  saldoPontos: Number,
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
