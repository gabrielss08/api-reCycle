//Importações
const express = require("express");
const router = express.Router();
const Usuario = require("../models/Usuario"); //Aguardando Implementação
const Itens = require("../models/Itens"); //Verificar a forma que será criado
const Troca = require("../models/troca"); //Verificar a forma que será criado

//Rota para trazer todos os Itens disponíveis para troca
router.get("/Itens", (req, res) => {
  Itens.findAll().then((Itens) => {
    Itens = Itens.map((itens) => {
      return itens.toJSON();
    });
    res.render("views/troca_pontos/Itens"); //Aguardando caminho correto
  });
});

//Rota para direcionar para a pagina de trocar pontos
router.get("/Itens/trocar_pontos", (req, res) => {
  res.render("views/troca_pontos/trocar_pontos"); //Aguardando caminho correto
});

//Rota para direcionar para a pagina de editar uma troca de pontos feita
router.get("/editar_troca/:id", (req, res) => {
  Troca_Pontos.findAll({ where: { id_troca_pontos: req.params.id } }).then(
    (troca_pontos) => {
      troca_pontos = troca_pontos.map((troca) => {
        return troca.toJSON();
      });
      res.render("views/troca_pontos/editar_troca", {
        troca_pontos: troca_pontos,
      });
    }
  );
});

//Rota para adicionar uma nova troca de pontos
router.post("/troca_pontos/adicionar", (req, res) => {
  Troca_Pontos.create({
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
router.post("/Troca_Pontos/atualizar", (req, res) => {
  Troca_Pontos.create(
    {
      fk_usuario: req.body.fk_usuario, //Confirmar quando model estiver pronto
      itens: req.body.itens,
      pontos: req.body.pontos,
    },
    {
      where: { id_tarefa: req.body.id_troca_pontos },
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
router.get("/deletar_troca_pontos/:id", (req, res) => {
  Troca_Pontos.destroy({ where: { id_troca_pontos: req.params.id } })
    .then(() => {
      res.redirect("/");
    })
    .catch((erro) => {
      res.render("Erro ao excluir Troca de Pontos: " + erro);
    });
});

module.exports = router;
