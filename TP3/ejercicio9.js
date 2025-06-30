//Realiza un script que cargue una lista con palabras ingresadas por el usuario.

const prompt = require(`prompt-sync`)();

let palabra, palabras = [];

do {
    palabra = prompt("Ingrese una palabra (Escriba fin para salir del programa)");
    if (palabra !== "fin"){
    palabras.push(palabra);
    }
} while (palabra !== "fin")
console.log("Palabras ingresadas: ", palabras.join(", "),".");




