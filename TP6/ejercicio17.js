//ejercicio 17:
/*
Escriba una función que verifique si todos los elementos de la matriz son del
mismo tipo de datos.
*/

function verifelemento (matriz){
    const  tipoInicial = typeof matriz[0];
     for (let i = 0; i < matriz.length; i++){
        
            if (typeof matriz[i] !== tipoInicial ){
                return `hay diferentes tipos`
            }
        
    }
    return `Todos son del mismo tipo `
}
const test1 = [1, 2, 3];                  
const test2 = ["a", "b", "c"];            
const test3 = [true, false, true];        
const test4 = [1, "2", 3];      
console.log(verifelemento(test1));
console.log(verifelemento(test2));
console.log(verifelemento(test3));
console.log(verifelemento(test4));