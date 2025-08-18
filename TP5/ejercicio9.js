//ejercicio 9
/*
Declare un nombre de función removeItem. Toma un parámetro de índice y devuelve un
arreglo después de eliminar un elemento (no utilice métodos de arreglos)

*/
//funciona (pensado por mi)
//no esta mal pero tampoco es la forma eficiente
let array =["a","b","c"];
function removeItem (indiceDeElElemento){
    let arreglo = ["-"];
    for (let i = 0; i < array.length; i ++){
        if (indiceDeElElemento === i){
            array[i] = arreglo;
        }
    }
    console.log(array);
}
removeItem(1);

//funciona(pensado por ia)
let arrays = ["a", "b", "c"];  
function removeItem2(index) {  
  let newArray = [];  
  let newIndex = 0;  
  for (let i = 0; i < arrays.length; i++) {  
    if (i !== index) {   // buscamos el distinto a index(el argumento), y lo agregamos en nuestro nuevo arreglo
      newArray[newIndex] = arrays[i];  
      newIndex++; //es para que newIndex pase a ser por ejemplo en la primer iteracion de  0 va a ser 1 asi nos aseguramos de pasar las posiciones  
    }  
  }  
  return newArray;  // todos los elementos excepto el que se elimino, que nunca se guarda en el array nuevo 
}  
console.log(removeItem2(1)); // ["a", "c"]  
console.log(removeItem2(0)); // ["b", "c"] 