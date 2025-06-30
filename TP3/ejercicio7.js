const prompt = require ("prompt-sync")();
let usuario = "";
let palabras = "";
let contador = 0;

do{
  usuario = prompt("ingrese palabras(para terminar el programa agregue fin): ");
  if (usuario !== "fin"){
    palabras = palabras  + usuario + "-";
    contador = contador+1;
    
  }
   
 
} while(usuario !== "fin")
console.log("fin del programa");
console.log("cantidad de palabras ingresadas: ", contador);  
console.log("estas son las palabras :", palabras);