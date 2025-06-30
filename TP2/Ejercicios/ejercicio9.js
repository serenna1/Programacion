//Como modificarías el ejercicio anterior para que indique específicamente cual de las dos
//condiciones no se cumplieron (suma o multiplicación) o si no se cumplió ninguna de las 2.

//ejercicio anterior 👇

let num1 = 8;
let num2 = 1;
let num3 = 1;
let num4 = 8;
let resultadoSuma = 0 ;
let resultadoMultiplicacion = 0 ;
resultadoSuma = num1 + num2 + num3 + num4;
resultadoMultiplicacion = num1 * num2 * num3 * num4;
if (resultadoSuma > 30 && resultadoMultiplicacion < 400){
    console.log(`${resultadoSuma} es > a 30 y ${resultadoMultiplicacion} es < a 400`)
}else
console.log(`Las condiciones no se complieron juntas`);
if(resultadoSuma > 30){
    console.log(`La suma se cumplio`)
}else
console.log(`La multpilicacion se cumplio`)