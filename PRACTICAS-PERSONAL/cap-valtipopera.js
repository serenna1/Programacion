//practicando en el cap valores, tipos y operadores
//string
console.log(`hola 
    probando 

    saltos de linea `);
console.log(`-------------`);
console.log("porbando \nY otro salto de linea ");

//como se concatena :
console.log("con" + "cat" + "e" + "nar");

console.log(`la mitad de 100 es ${100 / 2}`);//comillas inversas o tambien plantillas literales 
console.log(`------------`);
//operadores unarios: operan en un valor.
//operador typoff, ejemplo:
console.log(typeof 4.5);
// → number
console.log(typeof "x");
// → string
console.log(- (10 - 2));//el operador menos puede ser usado tanto como operador binario o unario 
// → -8
// valors boluenaos:
//ejemplo, las comparaciones:
console.log(3 > 2);
// → true
console.log(3 < 2);
// → false
console.log("Itchy" != "Scratchy")
// → true
console.log("Manzana" == "Naranja")
// → false
console.log(NaN == NaN)//no son iguales en javascript
// → false
//operadores logicos:
console.log(true && false)
// → false
console.log(true && true)
// → true
console.log(false || true)
// → true
console.log(false || false)
// → false

/*
Not se escribe como un signo de exclamación (!). Es un operador unario que voltea el valor dado—!true 
produce false y !false produce true.
*/
console.log(1 + 1 == 2 && 10 * 10 > 50);

//operador ternario 
console.log(true ? 1 : 2);//Este es llamado el operador condicional
// → 1
console.log(false ? 1 : 2);
// → 2
/*El valor a la izquierda del signo de interrogación “decide” cual de los otros dos valores 
sera retornado. Cuando es verdadero, elige el valor de en medio, y cuando es falso, el valor de la derecha.*/
//valores vacios :
//conversion de tipom automatica 
console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("cinco" * 2)
// → NaN
console.log(false == 0)
// → true

//valores de retorno:
console.log(Math.max(2, 4));
// → 4
console.log(Math.min(2, 4) + 100);


//ejecucion condicional 
let elNumero = Number(prompt("Elige un numero"));
if (!Number.isNaN(elNumero)) {//Number convierte texto a numero es decir pones "5", lo convierte en 5pero si el usuario escribe "perro " el serultado es NaN
                              // y Number.isNaN(elNumero), va a deevoolver true si el numero es Nan, por eso el ! antes que number 
  console.log("Tu número es la raiz cuadrada de " +
              elNumero * elNumero);
}

let elNumero = Number(prompt("Elige un numero"));
if (!Number.isNaN(elNumero)) {
  console.log("Tu número es la raiz cuadrada de " +
              elNumero * elNumero);
} else {
  console.log("Ey. Por qué no me diste un número?");
}