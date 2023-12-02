const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://richard:Recycle1234@recycle1.id40g9f.mongodb.net/",

    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("MongoDB Conectado ");
  })
  .catch((err) => {
    console.log("Erro ao conectar: " + err);
  });
