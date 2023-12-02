const mongoose = require("mongoose");

const transacaoSchema = new mongoose.Schema({
  id_usuario: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario" },
  itens: [{ type: mongoose.Schema.Types.ObjectId, ref: "Itens" }],
  data: { type: Date, default: Date.now },
});

const Transacao = mongoose.model("Transacao", transacaoSchema);

module.exports = Transacao;
