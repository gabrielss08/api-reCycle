//Importações
const express = require("express");
const router = express.Router();
const Usuario = require("../models/Usuario"); //Aguardando Implementação
const Itens = require("../models/Itens"); //Verificar a forma que será criado

//Rota para trazer todos os Itens disponíveis para troca
router.get("/Itens", (req, res) => {
  Itens.findAll().then((Itens) => {
    Itens = Itens.map((item) => {
      return item.toJSON();
    });
    res.render("views/itens/Itens"); //Aguardando caminho correto
  });
});

//Rota para direcionar para a pagina de trocar pontos
router.get("/Itens/trocar_pontos", (req, res) => {
  res.render("views/itens/trocar_pontos"); //Aguardando caminho correto
});

//Rota para direcionar para a pagina de editar uma troca de pontos feita
router.get("/editar_troca/:id", (req, res) => {
  Itens.findAll({ where: { id_itens: req.params.id } }).then((itens) => {
    itens = itens.map((troca) => {
      return troca.toJSON();
    });
    res.render("views/itens/editar_troca", {
      itens: itens,
    });
  });
});

//Rota para adicionar uma nova troca de pontos
router.post("/itens/adicionar", (req, res) => {
  Itens.create({
    fk_usuario: req.body.fk_usuario, //Confirmar quando model estiver pronto
    itens: req.body.itens,
    pontos: req.body.pontos,
  })
    .then(() => {
      res.redirect("/");
    })
    .catch((erro) => {
      res.send("Erro ao Cadastrar Troca de Pontos: " + erro);
    });
});

//Rota para atualizar uma troca de Pontos
router.post("/Itens/atualizar", (req, res) => {
  Itens.create(
    {
      fk_usuario: req.body.fk_usuario, //Confirmar quando model estiver pronto
      itens: req.body.itens,
      pontos: req.body.pontos,
    },
    {
      where: { id_tarefa: req.body.id_itens },
    }
  )
    .then(() => {
      res.redirect("/");
    })
    .catch((erro) => {
      res.send("Erro ao Atualizar Troca de Pontos: " + erro);
    });
});

//Rota para deletar uma Troca de Pontos
router.get("/deletar_itens/:id", (req, res) => {
  Itens.destroy({ where: { id_itens: req.params.id } })
    .then(() => {
      res.redirect("/");
    })
    .catch((erro) => {
      res.render("Erro ao excluir Troca de Pontos: " + erro);
    });
});

module.exports = router;
