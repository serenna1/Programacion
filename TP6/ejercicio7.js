//ejercicio 7 :
/*
Escriba una función generateColors que pueda generar cualquier número de
colores hexa o rgb.
*/ 
const prompt = require ("prompt-sync")();
function rgbColorGenerator(){
    let array = [];
    for (let i = 0 ; i < 3; i++){
        let numeroAleatorio = Math.floor(Math.random() * 256);
        array.push(numeroAleatorio);
        
    }
    return array.join(', ');
    
}
function convertRgbToHexa (numeroRgb){
    let numerorgbActual= [];
    numerorgbActual = numeroRgb.split(",");
    const r = parseInt(numerorgbActual[0]);
    const g = parseInt(numerorgbActual[1]);
    const b = parseInt(numerorgbActual[2]);
    return `rgb(#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')})`;
    
    
}


function generateColors(cantidadDeColoresAGenerar){
    
    for (let i = 0; i < cantidadDeColoresAGenerar; i++){
        
       console.log(`rgb(${rgbColorGenerator()})`);
       
        console.log(convertRgbToHexa(rgbColorGenerator()));
        
        
    }
    
   
}
cantidadDeColores = prompt(`Ingrese la cantidad de colores que desee generar: `);
generateColors(cantidadDeColores);