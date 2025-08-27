//ejercicio 4: 
/*
Escriba una función arrayOfRgbColors que devuelva cualquier cantidad de
colores RGB en una matriz.
*/
const prompt = require ("prompt-sync")();
function arrayOfRgbColors (){
 let cantidadDeColores = prompt ('Ingrese la cantidad de colores que desea generar: ');
 let coloresFinales = [];
 
 for (let i = 0 ; i < cantidadDeColores; i++){
    let coloresAcutuales = [];
    for(let e = 0; e < 3;e ++){
         let numerosAleatorios = Math.floor(Math.random()*256);
         coloresAcutuales.push(numerosAleatorios);
         
         
        }
        coloresFinales.push(`rgb(${coloresAcutuales.join(', ')})` );
        
     }
     
        for (let color of coloresFinales){
    console.log(color);
   }
 }



arrayOfRgbColors();