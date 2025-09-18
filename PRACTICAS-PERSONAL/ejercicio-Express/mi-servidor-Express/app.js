import express from "express";
import usuariosRoutes from "./service/usuarios.js";

const app = express();
const port = 3000;

app.use("/usuarios", usuariosRoutes);

app.get("/", (req, res) => {
  res.send("Bienvenidos a mi API");
});

app.listen(port, () => {
  console.log("Api funcionando en http://localhost:" + port);
});
