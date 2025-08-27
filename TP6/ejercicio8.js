//ejercicio 8:
/*
Llame a su función shuffleArray, toma una matriz como parámetro y devuelve
una matriz mezclada
*/

//arreglo = [1,2,3,4]
//funciona sin metedos incluso 
function shuffleArray(array){
    console.log(`Su arreglo sin modificar: ${array}`)
    for (let i = 0; i < array.length; i++){
     let posicionesAleatorias = Math.floor(Math.random()*array.length);
     let  temp = array[i];
     array[i] = array[posicionesAleatorias];
     array[posicionesAleatorias] = temp;
    }
    console.log(`Su arreglo ya madoificado: ${array}`);
}
shuffleArray([1,2,3,4,5,6]);