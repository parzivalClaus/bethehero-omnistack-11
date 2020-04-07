const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.json({
    event: "Semana Omnistack 11.0",
    aluno: "Claudio Ferreira",
  });
});

app.listen(3333);
