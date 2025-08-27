//ejercicio 11
/*
Llame a su función suma, toma cualquier cantidad de argumentos y devuelve la
suma.
*/
//funciona
function suma (...arg){
    let resultado = 0 
    for (let num of arg){
        resultado += num
    }
    console.log(resultado);
}
suma(1,2);