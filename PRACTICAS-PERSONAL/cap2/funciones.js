// capitulo funciones:
//recursion(cuando una funcion se llama en la misma funcion)
//ejemplo de una potencia
function potencia(base, exponente) {
  if (exponente == 0) {
    return 1;
  } else {
    return base * potencia(base, exponente - 1);
  }
}

console.log(potencia(2, 8));
// → 8
//esta version de codigo puede llegar a ser 3 veces mas lenta que un codigo conn ciclo
/*
Considera este acertijo: comenzando desde el número 1 y repetidamente agregando 5 o multiplicando por 3, 
una cantidad infinita de números nuevos pueden ser producidos. ¿Cómo escribirías una función que, dado un número, 
intente encontrar una secuencia de tales adiciones y multiplicaciones que produzca ese número?
Por ejemplo, se puede llegar al número 13 multiplicando primero por 3 y luego agregando 5 dos veces, 
mientras que el número 15 no puede ser alcanzado de ninguna manera.
*/
function encontrarSolucion(objetivo) {
  function encontrar(actual, historia) {
    if (actual == objetivo) {
      return historia;
    } else if (actual > objetivo) {
      return null;
    } else {
      return encontrar(actual + 5, `(${historia} + 5)`) ||
             encontrar(actual * 3, `(${historia} * 3)`);
    }
  }
  return encontrar(1, "1");
}

console.log(encontrarSolucion(24));
// → (((1 * 3) + 5) * 3)

//ejercios de este capitulo:
/*
Escribe una función min que tome dos argumentos y retorne su mínimo.
*/
function numeroMinimo(a,b){
  console.log(Math.min(a,b));
}
numeroMinimo(2,-10);
/*
Define una función recursiva esPar que corresponda a esta descripción. La función debe aceptar un solo parámetro 
(un número entero, positivo) y devolver un Booleano.
*/
function esPar (numero){
  numero = Math.abs(numero);
 if(numero === 0){
  return true;
 }else if(numero===1){
  return false;
 }
 else 
  return esPar(numero - 2);
   

 
  
}
console.log(esPar(-2));

/*
Escribe una función contarFs que tome un string como su único argumento y devuelva un número que indica cuántos 
caracteres “F” en mayúsculas haya en el string.Despues, escribe una función llamada contarCaracteres que se comporte como 
contarFs, excepto que toma un segundo argumento que indica el carácter que debe ser contado 
(en lugar de contar solo caracteres “F” en mayúscula). Reescribe contarFs para que haga uso de esta nueva función.*/

function contarfs (strinnng){
  
  let acumuladorFs = 0;
  for (let i = 0; strinnng.length > i; i++){
    if(strinnng[i] === "F"){
      acumuladorFs ++;
    }
    
  }
  console.log (`${acumuladorFs} son las F que hay en la palabra `);
}
contarfs("FFnlFFF");
function contarCaracteres (string, carcater){
  let acumulador = 0;
  for(let i = 0; string.length > i; i++ ){
    if(string[i] === carcater){
      acumulador ++;
    }
  }
  console.log (`${string} tiene ${acumulador} cacarteres del tipo ${carcater}`);
}
contarCaracteres("AbnjkAbjkaAA","A");