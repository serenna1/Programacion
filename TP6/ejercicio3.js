//ejercicio 3: 
/*
Escriba una función arrayOfHexaColors que devuelva cualquier cantidad de
colores hexadecimales en una matriz.
*/

//funciona me ayude con ia 
const prompt = require ("prompt-sync")();
function arrayOfHexaColors (){
    let cantidadDeColores = prompt("Ingrese la cantidad de colores que desea generar: ");
    cantidadDeColores = parseInt(cantidadDeColores);
    let array = [];

    for (let i = 0; i < cantidadDeColores; i++){
        let color = '#';
        for(let e = 0; e < 6; e++){
            let numeroAleatorio = Math.floor(Math.random()* 16);
            color += numeroAleatorio.toString(16);
            
            
        }
        array.push(color);
        
    }     
    for (let color of array){
        console.log(`rgb (${color})`);
    }
    
}
arrayOfHexaColors();