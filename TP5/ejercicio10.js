//ejercicio 10:
/*
Declare un nombre de función sumOfNumbers. Toma un parámetro numérico y suma todos
los números en ese rango.
*/
//funciona solo saque de ia la formula =>  numeroASumar*(numeroASumar+1)/2 (positivos), (n * (n - 1) / 2) + 1 (negativo)
function sumOfNumbers (numeroASumar){
    let numeroNuevo = 0;
    if (numeroASumar === 0){
        console.log(`su numero es igual a 0, vuelva a intentarlo`);
    }else if (numeroASumar < 0){
        console.log(`Su numero: ${numeroASumar} es negativo.`);
        for (let i = numeroASumar; i < 0; i++) { // el for fue idea de ia 
            numeroNuevo += i;  // Sumar todos los números negativos
        }
        
        console.log(numeroNuevo);
        
    }else{ // estas llaves son importantes si no el numero negativo tambien entra en este else 
        console.log(`Su numero: ${numeroASumar} es positivo.`);
        numeroNuevo = numeroASumar*(numeroASumar+1)/2;
        console.log(numeroNuevo);
    }
   
}
sumOfNumbers(5);
sumOfNumbers(-5);
sumOfNumbers(0);




