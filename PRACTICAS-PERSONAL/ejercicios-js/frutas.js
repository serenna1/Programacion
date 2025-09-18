const fs = require("fs");
const frutas = ["banana", "manzana", "frutilla", "higo", "durazno", "pera"];
const textoFrutas = frutas.join("\n");
// fs.writeFile este metodo crea un archivo o sobreescribe otro
//()"fruta.txt" nombre del archivo a crear
//textoFrutas lo que va a tener adentro el archivo
//(error) => { ... } se ejecuta cuando temina de escribir el archivo
fs.writeFile("fruta.txt", textoFrutas, (error) => {
  if (error) {
    console.error("Error al escribir el archivo", error); //console.error(): funciona igual que console.log(), pero lo usamos para mostrar errores en rojo (para distinguirlos de mensajes normales).
    return;
  }
  console.log("Archivo de frutas, creado con exito!");
  //"frutas.txt" lee este archivo ya existente
  //"utf8" le decimos a node que queremos el contenido como texto y no como byte
  //(error,data) => funciona cuanod termina de leer elarchivo
  fs.readFile("fruta.txt", "utf8", (error, data) => {
    if (error) {
      console.error("Error al leer el archivo:", error);
      return;
    }
    console.log("\nContenido del archivo:");
    console.log(data);
    const frutasArray = data.split("\n");
    const frutasLargas = frutasArray.filter((fruta) => fruta.length > 5);

    console.log("\nFrutas con más de 5 letras:");
    console.log(frutasLargas);
  });
});
