/*
Monta el servidor Express y conecta las rutas 
*/
import express from "express";
import notasRoutes from "./routes/notas.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/notas", notasRoutes);

app.get("/", (req, res) => {
  res.send("📒 API de Notas funcionando!");
});

app.listen(port, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
});
