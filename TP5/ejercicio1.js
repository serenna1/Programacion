//Este trabajo parctico son funciones de"nivel dos"
/*La ecuación lineal se calcula de la siguiente manera: ax + by + c = 0. Escriba una función que
calcule el valor de una ecuación lineal, solveLineEquation.*/
//forma facil,funciona:
// idea sola mia y funciono a la primera 
function solveLineEquation (a, x, b, y, c){
    let suma = (a * x) + (b * y) + c;
    let resultado = false;
    if(suma != 0 ){
        
        return resultado + (`:  Su funcion no es posible de calcular`);
    }else 
        resultado = true;
        return resultado + (`: Su funcion es poscible de calcular `);
}
console.log(solveLineEquation(2,1,3,1,-5));

//forma con ternarios,funciona:
//chat me tiro la idea de que pruebe con ternario lo hice practicamente sola 
function solveLineEquation2(a,x,b,y,c){
    let suma = (a * x) + (b * y) + c;
    let resultado = false;
    return  suma === 0 ? resultado = true : resultado = false;
}
console.log(solveLineEquation2(2,1,3,1,-5));

//forma con objeto, funciona:
//este fue sacado del chat 
function solveLineEquation3(a, x, b, y, c) {
    const suma = (a * x) + (b * y) + c;
    return {
        valor: suma,
        esPosible: suma === 0
    };
}

console.log(solveLineEquation3(2, 1, 3, 1, -5));