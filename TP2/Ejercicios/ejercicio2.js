//Realiza una aplicación que le solicite al usuario su nombre y su edad y le muestre por
//pantalla el mensaje “Hola XX tu edad es XX” donde XX son los datos del usuario.
const prompt = require (prompt-sync)();
let usuario;
usuario = prompt ("Ingrese su nombre: ")
while (usuario !== "fin"){
    console.log (`Hola ${usuario}`);
    usuario = prompt ("Ingrese su edad: ");
    console.log (`Su edad  es: ${usuario}`);
    usuario = prompt ("escriba fin")
    
    if(usuario === "fin"){
        console.log(`Gracias por dejarnos sus datos. `);
    }
}