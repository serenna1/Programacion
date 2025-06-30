//Realiza un programa que dados 4 números almacenados en variables, calcule la suma y
//multiplicación de los mismos y muestre por pantalla un mensaje que indique si la suma da
//mayor a 30 y la multiplicación menor a 400 (deben darse las 2 condiciones
//simultáneamente) y otro mensaje en caso contrario.

let num1 = 8;
let num2 = 7;
let num3 = 8;
let num4 = 8;
let resultadoSuma = 0 ;
let resultadoMultiplicacion = 0 ;
resultadoSuma = num1 + num2 + num3 + num4;
resultadoMultiplicacion = num1 * num2 * num3 * num4;
if (resultadoSuma > 30 && resultadoMultiplicacion < 400){
    console.log(`${resultadoSuma} es > a 30 y ${resultadoMultiplicacion} es < a 400`)
}else
console.log(`Las condiciones no se complieron`);
