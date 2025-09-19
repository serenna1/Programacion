/*
define la clase nota 
*/
export class formatoNotas {
  constructor(id, titulo, contenido) {
    this.id = id;
    this.titulo = titulo;
    this.contenido = contenido;
  }
  mostrarNota() {
    return `id: ${this.id}, titulo: ${this.titulo}, contenido: ${this.contenido}`;
  }
}
