//Importações
const express = require("express");
const router = express.Router();
const Transacao = require("../models/tarefa"); //Aguardando Implementação
const Usuario = require("../models/Usuario"); //Aguardando Implementação

//Rota para trazer todas as tarefas
router.get("/tarefa", (req, res) => {
  Tarefa.findAll().then((tarefas) => {
    tarefas = tarefas.map((tarefa) => {
      return tarefa.toJSON();
    });
    res.render("views/tarefa/tarefa"); //Aguardando caminho correto
  });
});

//Rota para direcionar para a pagina de adicionar
router.get("/tarefa/adicionar", (req, res) => {
  res.render("views/tarefa/adicionarTarefa"); //Aguardando caminho correto
});

//Rota para direcionar para a pagina de editar
router.get("/editar_tarefa/:id", (req, res) => {
  Usuario.findAll({ where: { id_usuario: req.params.id } }).then((usuarios) => {
    Tarefas.findAll().then((tarefas) => {
      var ntarefas = JSON.parse(JSON.stringify(tarefas));
      var nusuarios = JSON.parse(JSON.stringify(usuarios));
      res.render("views/tarefas/editartarefa", {
        //Aguardando caminho correto
        usuarios: nusuarios,
        tarefas: ntarefas,
      });
    });
  });
});

//Rota para adicionar uma tarefa
router.post("/tarefa/adicionar", (req, res) => {
  Tarefa.create({
    fk_usuario: req.body.fk_usuario, //Confirmar quando model estiver pronto
    itens: req.body.itens,
    pontos: req.body.pontos,
  })
    .then(() => {
      res.redirect("/");
    })
    .catch((erro) => {
      res.send("Erro ao Cadastrar Tarefa: " + erro);
    });
});

//Rota para atualizar uma tarefa
router.post("/tarefa/adicionar", (req, res) => {
  Tarefa.create(
    {
      fk_usuario: req.body.fk_usuario, //Confirmar quando model estiver pronto
      itens: req.body.itens,
      pontos: req.body.pontos,
    },
    {
      where: { id_tarefa: req.body.id_tarefa },
    }
  )
    .then(() => {
      res.redirect("/");
    })
    .catch((erro) => {
      res.send("Erro ao Atualizar Tarefa: " + erro);
    });
});

//Rota para deletar uma tarefa
router.get("/deletar_tarefa/:id", (req, res) => {
  Tarefa.destroy({ where: { id_tarefa: req.params.id } })
    .then(() => {
      res.redirect("/");
    })
    .catch((erro) => {
      res.render("Erro ao excluir Tarefa: " + erro);
    });
});

module.exports = router;
