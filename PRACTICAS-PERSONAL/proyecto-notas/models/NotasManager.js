/*
Clase que maneja todas las notas
*Lee y escribe el archivo notas.json usando fs
*Crea nuevas notas usando la clase Nota
*Busa elimina o utiliza notas
*/
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { Nota } from "./Nota.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class NotasManager {
  constructor() {
    this.filePath = path.join(__dirname, "../db/notas.json");
  }
  leerNotas() {
    const data = fs.readFileSync(this.filePath, "utf-8");
    return JSON.parse(data); //devuelve un array con todos las notas actuales
  }

  guardarNotas(notas) {
    fs.writeFileSync(this.filePath, JSON.stringify(notas, null, 2));
  }

  addNota(titulo, contenido) {
    const notas = this.leerNotas();
    //operador ternario:
    const id = notas.length ? notas[notas.length - 1].id + 1 : 1; //genera un id unico para cada nota
    // si notas.length es true, enonces (?) en la ultima nota del array (notas[notas.length -1] accede a su id y le suma 1, si es false (:) se le suma 1, el nuevo id va a ser 1)
    const nuevaNota = new Nota(id, titulo, contenido);
    notas.push(nuevaNota);
    this.guardarNotas(notas);
    return nuevaNota;
  }
}
