//Importações
const express = require("express");
const router = express.Router();
const Itens = require("../models/Itens");
const Usuario = require("../models/Usuario");
const Transacao = require("../models/transacao");

//Rota para trazer todas as tarefas
router.get("/transacao", (req, res) => {
  Transacao.findAll().then((transacoes) => {
    transacoes = transacoes.map((transacao) => {
      return transacao.toJSON();
    });
    res.render("views/transacao/transacao"); //Confirmar caminho do handlebars
  });
});

//Rota para direcionar para a pagina de adicionar
router.get("/transacao/adicionar", (req, res) => {
  res.render("views/transacao/adicionarTransacao"); //Aguardando caminho correto
});

//Rota para direcionar para a pagina de editar
router.get("/editar_transacao/:id", (req, res) => {
  Usuario.findAll({ where: { id_usuario: req.params.id } }).then((usuarios) => {
    Transacao.findAll().then((transacoes) => {
      var ntransacoes = JSON.parse(JSON.stringify(transacoes));
      var nusuarios = JSON.parse(JSON.stringify(usuarios));
      res.render("views/transacoes/editartransacao", {
        //Aguardando caminho correto
        usuarios: nusuarios,
        transacoes: ntransacoes,
      });
    });
  });
});

//Rota para adicionar uma transacao
router.post("/transacao/adicionar", (req, res) => {
  Transacao.create({
    fk_usuario: req.body.fk_usuario, //Confirmar quando model estiver pronto
    itens: req.body.itens,
    data: req.body.data,
  })
    .then(() => {
      res.redirect("/");
    })
    .catch((erro) => {
      res.send("Erro ao Cadastrar Transacao: " + erro);
    });
});

//Rota para atualizar uma tarefa
router.post("/transacao/adicionar", (req, res) => {
  Transacao.create(
    {
      fk_usuario: req.body.fk_usuario, //Confirmar model
      itens: req.body.itens,
      data: req.body.pontos,
    },
    {
      where: { id_transacao: req.body.id_transacao },
    }
  )
    .then(() => {
      res.redirect("/");
    })
    .catch((erro) => {
      res.send("Erro ao Atualizar Transacao: " + erro);
    });
});

//Rota para deletar uma transacao
router.get("/deletar_transacao/:id", (req, res) => {
  Transacao.destroy({ where: { id_transacao: req.params.id } })
    .then(() => {
      res.redirect("/");
    })
    .catch((erro) => {
      res.render("Erro ao excluir Transacao: " + erro);
    });
});

module.exports = router;
