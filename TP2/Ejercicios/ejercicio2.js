//Realiza una aplicación que le solicite al usuario su nombre y su edad y le muestre por
//pantalla el mensaje “Hola XX tu edad es XX” donde XX son los datos del usuario.
const prompt = require ("prompt-sync")();
let usuario;
let nombre;
usuario = prompt ("Ingrese su nombre: ")
while (usuario !== "fin"){
    console.log (`Hola ${usuario}`);
    nombre = usuario;
    usuario = prompt ( `${nombre} a continuacion escriba su Edad: `);
    console.log (`Su Edad es: ${usuario}`);
    usuario = prompt ("escriba fin: ")
    
    if(usuario === "fin"){
        console.log(`Gracias por dejarnos sus datos. `);
    }
    
}
console.log(`Escribio fin, vuelva a intentarlo. `)