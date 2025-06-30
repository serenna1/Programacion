//Realiza una aplicación que solicite una edad al usuario e indique si
//  es mayor a 18 años o menor.


const prompt = require ("prompt-sync")();
let usuario= 0;
usuario = Number (prompt ("Escriba su edad: "));
if(usuario >= 18){
    console.log (`Usted es mayor de edad`)

}else
console.log (`Usted es menor de edad`);