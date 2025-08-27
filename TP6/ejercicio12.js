//ejercicio 12:
/*
Escriba una función llamada sumOfArrayItems, toma un parámetro de matriz y
devuelve la suma de todos los elementos. Compruebe si todos los elementos
de la matriz son tipos de números. Si no, dé una respuesta razonable.
*/
function sumOdArrayItems(matrizASumar){
    let resultado = 0;
    
    for (let i = 0; i < matrizASumar.length ;i++){
        if (typeof matrizASumar[i] === 'number' ){
              resultado += matrizASumar[i];
        }else{
          console.log(`En su array hay un string "${matrizASumar[i]}" el cual no se va a sumar por obvias razones`);
        }
        
    }

    console.log(`La suma de los elementos numerico es: ${resultado}`);
    
   

}
sumOdArrayItems([1,2,3,4,'a', ' ']);