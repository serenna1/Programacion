//ejercicio 7:
/*
Declare un nombre de función capitalizeArray. Toma array como parámetro y devuelve el –
array capitalize.
Capitalizar en js es basicamente poner la primer letra en mayuscula, puede ser al reves tambien 

*/
//funciona 
function capitalizeArray (array){
    let arrayacumulador = [];
    for(let i = 0 ; i < array.length ; i ++){
        arrayacumulador.push(array[i][0].toUpperCase() /* <= este metedo solo funciona con string*/ + array[i].slice(1));
        //array[i][0] cuando tenes u string en js se puede accedecer asus letras con los corchetes tal cual en los arrays 
        // por ende eso seria como la primer letra del string en la poscion de i del array 
    }
    console.log(arrayacumulador)
}
capitalizeArray(["hola", "mundo"]);