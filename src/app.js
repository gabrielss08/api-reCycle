const express = require("express");
const handlebars = require("express-handlebars");
const app = express();
const router = require("./routes/rotas");
const bodyParser = require("body-parser");

//imports das rotas secundárias
const rota_itens = require("./routes/rota_itens");
const rota_transacao = require("./routes/rota_transacao");
const rota_tarefa = require("./routes/rota_tarefa");
const rota_troca_pontos = require("./routes/rota_troca_pontos");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Configuração para servir arquivos estáticos (CSS e imagens)
app.use("/css", express.static(__dirname + "/public/css"));
app.use("/img", express.static(__dirname + "/public/img"));

// Usar as rotas definidas no arquivo rotas_usuario.js
app.use("/", router);

// Rota principal
app.get("/", (req, res) => {
  res.render("home");
});

//Rotas secundarias

app.use("/rota_itens", rota_itens);
app.use("/rota_transacao", rota_transacao);
app.use("/rota_tarefa", rota_tarefa);
app.use("/rota_troca_pontos", rota_troca_pontos);

// Configuração do número da porta e inicialização do servidor
const PORT = 8081;
app.listen(PORT, () => {
  console.log("Servidor Rodando na porta", PORT);
});
