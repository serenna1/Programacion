//Realiza una aplicación que solicite al usuario su nombre y apellido y lo muestre en pantalla.
const prompt = require ("prompt-sync")();
let usuario;
usuario = prompt  ("escriba su Nombre y Apelido, al finalizar escriba fin: ");
while (usuario !== "fin"){
    console.log("Perfecto ahora escriba fin, para terminar: ")
    usuario = prompt ();
    if(usuario === "fin"){
        console.log("Gracias por dejar sus datos ")
    }
}


