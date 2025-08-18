//ejercicio 11 
/*
Declare un nombre de función sumOfOdds. Toma un parámetro numérico y agrega todos
los números impares en ese rango.
*/
//funciona => lo hice yo
function sumOfOdds (numero){
    if(numero === 0){
        console.log(`Su numero es igual a 0`);
       
    }
    while(numero < 0){
        console.log(`Su numero es negativo`);
        if(numero % 2 === 0){
            console.log(`Su numero: ${numero}, es negativo y par`)
            break
        }else 
            console.log(`Su numero: ${numero}, es negativo e impar`)
            break
    }

    while(numero > 0 ){
        if(numero % 2 === 0){
            console.log(`Su numero: ${numero}, es positivo y par`)
            break
        }else
            console.log(`Su numero: ${numero}, es positivo y par`)
            break
 }
}
sumOfOdds(0);
sumOfOdds(5);
sumOfOdds(-5);
sumOfOdds(2);
sumOfOdds(105);