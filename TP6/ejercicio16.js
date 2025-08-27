//ejercicio 16;

/*
Escriba una función que verifique si todos los elementos son únicos en la
matriz.
*/
function elemntosIguales(matriz){
    
    for (let i = 0; i < matriz.length; i++){
        for (let e  =  i + 1; e < matriz.length; e++){
            if (matriz[i] === matriz[e]){
                return `hay elementos iguales en su arreglo`
            }
        }
    }
    return `Todos los elementos son unicos`
}
const arreglo = [1,2,5,6];
const arreglo2 = [1,1,2,3];
const arreglo3 = [1,2,3,4,1];
console.log(elemntosIguales(arreglo));
console.log(elemntosIguales(arreglo2));
console.log(elemntosIguales(arreglo3));