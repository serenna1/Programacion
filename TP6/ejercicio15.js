//ejercicio 15
/*
Escribe una función llamada isPrime, que verifique si un número es un número
primo.

para la  raiz cuadrada podemos usar 
const raíz = n ** 0.5; // Ejemplo: 25 ** 0.5 → 5
*/
//funciona
function isPrime (numero){
    if (numero <= 1){
        return false
    }
    let numeroSuRaiz = Math.floor(numero ** 0.5);
   for (let i = 2; i <= numeroSuRaiz; i++){
      if (numero % i === 0 ){
        return true;
        }
        
    }
    return false;
}
console.log(isPrime(2));
console.log(isPrime(29));
console.log(isPrime(1));
console.log(isPrime(-3));
console.log(isPrime(6));