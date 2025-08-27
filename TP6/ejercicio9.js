//ejercicio 9:
/*
Llame a su función factorial, toma un número entero como parámetro y
devuelve un factorial del número
*/
//funciona lo hice yo 
function factorial(numero){
    console.log(`El numero que hay de argumento es: ${numero}`);
    if (numero === 0 ){
        return `El numero factorial es: ${numero + 1}`;
    }else if (numero < 0){
        return `no se puede devolver un factorial de un numero negativo, intente de nuevo con un numero positivo.`
    }else if (numero > 0){
        let resultado = 0;
        for(let i = 1; i < numero;i++ ){
            let numeroNuevo = numero -1;
            resultado = numero * numeroNuevo;
            numeroNuevo -1;
        }
     return ` El numero factorial es: ${resultado}`;
    }
    

}
console.log(factorial(3));
console.log(factorial(-4));
console.log(factorial(0));