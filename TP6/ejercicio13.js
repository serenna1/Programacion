//ejercicio 13:
/*
Escriba una función llamada promedio, toma un parámetro de matriz y
devuelve el promedio de los elementos. Compruebe si todos los elementos de
la matriz son tipos de números. Si no, dé una respuesta razonable.
*/
let resultado = 0;
const arrayDePromedio = [9,6,9,7,"bien","regular"];
function promedio(matrizAPromediar){
    console.log(`El Array a promediar es: ${matrizAPromediar}`);
    let cantidadDeNumeros = 0;
    for (let i = 0; i < matrizAPromediar.length ;i++){
        if (typeof matrizAPromediar[i] === 'number' ){
              resultado += matrizAPromediar[i];
              cantidadDeNumeros += 1;
        }else{
          console.log(`En su array hay un string "${matrizAPromediar[i]}" el cual no se va a sumar por obvias razones`);
        }
        
    }
    let promedio = resultado / cantidadDeNumeros;
    return `El promedio es de: ${promedio}`
}
console.log(promedio(arrayDePromedio));




