const mongoose = require("mongoose");

const tarefaSchema = new mongoose.Schema({
  id_usuario: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario" },
  itens: [{ type: mongoose.Schema.Types.ObjectId, ref: "Itens" }],
  valorPontos: Number,
});

const Tarefas = mongoose.model("Tarefas", tarefaSchema);

module.exports = Tarefas;
