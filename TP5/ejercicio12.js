//ejercicio 12:
/*
Declare un nombre de función sumOfEven. Toma un parámetro numérico y suma todos los
números pares en ese rango.
*/

//funciona  una gran parte lo pense yo 
function sumOfEven(numero){
    let acumulador = 0;
    
    if(numero === 0){
        console.log(`Su numero es igual a 0`);
        
    }
    if(numero < 0){
        console.log(`Su numero: ${numero} es negativo`)
        for (let i = numero ; i < 0; i ++){
            if (i % 2 === 0){
                acumulador += i;
                
            }
        }
        
        console.log(`La suma de los numero pares: ${acumulador}`);
        acumulador = 0;
    }
    else{
        console.log(`Su numero: ${numero} es positivo`)
        for (let i = numero; i > 0; i--){ // aca decrementa yo habia puesto ++ y por eso no fucionaban los positivos 
         if( i % 2 === 0){
             acumulador += i;

            }
        }
        
       console.log(`La suma de los numero pares: ${acumulador}`); 
       acumulador = 0;
    }
}
sumOfEven(0);
sumOfEven(-6);
sumOfEven(12);
