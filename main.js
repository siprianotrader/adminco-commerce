const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// Serve os arquivos estáticos da pasta onde está o index.html
app.use(express.static(path.join(__dirname)));

// Rota para servir o index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
