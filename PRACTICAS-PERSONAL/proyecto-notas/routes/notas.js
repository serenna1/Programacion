/*
Aqui se define las rutas de Express(GET/notas, POST/notas,etc)
*Llama a los metodos de NotasMAnager para hacer la logica rela 
*/
import { Router } from "express";
import { NotasManager } from "../models/NotasManager.js";

const router = Router();
const notasManager = new NotasManager();

router.get("/", (req, res) => {
  const notas = notasManager.leerNotas();
  res.json(notas);
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const nota = notasManager.leerNotas().find((n) => n.id === id);
  if (nota) {
    res.json(nota);
  } else {
    res.status(404).send("Nota no encontrada");
  }
});

router.post("/", (req, res) => {
  const { titulo, contenido } = req.body;

  if (!titulo || !contenido) {
    return res
      .status(400)
      .send("Faltan datos: titulo y contenido son requeridos ");
  }

  const nuevaNota = notasManager.addNota(titulo, contenido);
  res.status(201).json(nuevaNota);
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const notas = notasManager.leerNotas();
  const index = notas.findIndex((n) => n.id === id);

  if (index === -1) {
    return res.status(404).send("Nota no encontrada");
  }
  notas.splice(index, 1);
  notasManager.guardarNotas(notas);
  res.send(`Nota con id ${id} eliminada`);
});
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { titulo, contenido } = req.body;

  if (!titulo && !contenido) {
    return res
      .status(400)
      .send("Se requiere al menos titulo o contenido para actualizar");
  }

  const notas = notasManager.leerNotas();
  const nota = notas.find((n) => n.id === id);

  if (!nota) {
    return res.status(404).send("Nota no encontrada");
  }

  if (titulo) nota.titulo = titulo;
  if (contenido) nota.contenido = contenido;

  notasManager.guardarNotas(notas);
  res.json(nota);
});
export default router;
