import { Router } from "express"; //importamos la funcion Router desde Express
import usuarios from "../db/usuarios.json" with { type: "json" }; //importamos usuarios (archivo.json)
// le dice a Node que tratemos el archivo como modulo JSON
const router = Router();

//de vuelve la lista completa de usuarios. (cuando alguien entra a usuarios)
router.get("/", (req, res) => {
  //req:representa la peticion del usuario
  res.json(usuarios); //res: representa la respuesta del servidorconvierte usuarios a json
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id); //req.params.id => el valor que el usuario pone en el URL
  const usuario = usuarios.find((u) => u.id === id); // de vuelve un objeto
  if (usuario) {
    res.json(usuario);
  } else {
    res.status(404).send("usuario no encontrado");
  }
});

export default router;
