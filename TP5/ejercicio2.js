//ejercicio 2 
/*
La ecuación cuadrática se calcula de la siguiente manera: ax2 + bx + c = 0. Escriba una función 
que calcule el valor o los valores de una ecuación cuadrática, solveQuadEquation.
*/
//formula sacada del chat: en  js se escribe asi: a * (x ** 2) + b * x + c === 0
/*
es igual al ejercicio 2 asi que direcatemente voy a ahcerlo con ternario asi practico
*/
function solveQuadEquation (a,x,b,c){
    let formula = a * (x ** 2) + b * x + c;
    let resultado = false;

    return formula === 0 ? !resultado : resultado;
}
console.log(solveQuadEquation());//0 flase => esto da false porque:
/*
al no pasar arguementos, lo que toma js como arguement es undefined, y undefined * undedfined = Nan por ende formula va a valer Nan 
y en la condicion de Nan === 0 es falso
*/
console.log(solveQuadEquation(0,0,0,0));//0 true 
console.log(solveQuadEquation(1,2,2,-8));//0  true
console.log(solveQuadEquation(1,2,5,1));//15 false
