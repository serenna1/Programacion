/*let numeros = [1, 2, 3, 4, 5, 6, 7 , 8, 9 , 10];
console.log([1, 2, 3, 4, 5, 6, 7 , 8, 9 , 10]);
*/
const prompt=require("prompt-sync")();

let palabra;
let Num; 


do{ 
    palabra = prompt("ingrese numeros ");

    Num = parseInt(palabra);  
} while (Num !== 0 )
 console.log ("Fin del programa");
