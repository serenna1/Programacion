//ejercicio 5 
/*
Declare un nombre de función swapValues. Esta función intercambia el valor de x a y.
*/
//funciona (lo pense yo)
function swapValues(x,a){
    let acumulador = 0;
    acumulador = x;
    x = a;
    a = acumulador;
    console.log(x);
    console.log(a);

}
swapValues(10,5);
// estaas dos formasa tambien funcionan me las dio el chat 
//primero
function swapValues(x, a) {
    [x, a] = [a, x];
    console.log(x);
    console.log(a);
}

//segundo
function swapValues(x, a) {
    return [a, x];
}
console.log(swapValues(10, 5)); // [5, 10]
