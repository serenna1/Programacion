//ejercicio 14:
/*Escriba una función que tome cualquier número de argumentos y devuelva la suma de los
argumentos
*/
//ee funciona pero hay que chequear 
function sumaDeArgumentos(a,b,c,d){
    let resultado = a + b + c + d;
    console.log(resultado);
}
sumaDeArgumentos(2,5,4,6);
sumaDeArgumentos(5,5); //NaN, al no darle valor a los arguemntos eso da undefined y nos imprime NaN
sumaDeArgumentos(2,3,3,0);


//otra opcion me ayuda ia 
function sumaDeArgumentos2(...args) { // operador rest, funciona como un array, el operador funciona asi (...nombreDelOperadorRest)
    let resultado = 0;
    for (let num of args) { //iteramos sobre el operador rest
        resultado += num; // Suma cada argumento
    }
    console.log(resultado);
}
// Ejemplos de uso
sumaDeArgumentos2(2, 5, 4, 6); // 17
sumaDeArgumentos2(5, 5); // 10
sumaDeArgumentos2(1, 2, 3); // 6
sumaDeArgumentos2(1, 2, 3, 4); // 10