//ejercicio 6 
/*
Declare un nombre de función reverseArray. Toma una matriz como parámetro y devuelve
el reverso de la matriz (no use el método reverse).
*/
//funciona 
function reverseArray(array){
    let arrayacumulador = [];
    for (let i = array.length -1 ; i >= 0 ; i-- ){// i comienza en la ultima posicion del array; i menor o igual a 0(primer posicion del array); i-- (va hacia atras)
        
        arrayacumulador.push(array[i]);//se agrega en la ultima posicion de arrayacumulador, el valor en la posicion que se este incrementando 
        
    }
    console.log(arrayacumulador);
}
reverseArray([1,2,3]);