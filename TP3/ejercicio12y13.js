//12) Realiza un script que dado una lista de números. Solicite otro número al usuario e indique si
//el número se encuentra en la lista.
/*13)Como modificarías el ejercicio anterior para que devuelva la ubicación donde se encontraba el
dato dentro de la lista?. En caso de no encontrarse indicarlo también.
*/
const prompt= require("prompt-sync")();

let lista = [1, 2, 3, 4, 5, 6];
let numero = parseInt(prompt("ingrese un numero: "));
let bandera = false;
let posicion = 0;
//dessde ; hasta ; incremento
for (let i = 0 ; i < lista.length ; i++){
    if ( numero === lista [i])
    {
      bandera = true;
      posicion = i ;
    }

}
if(bandera){
    console.log("el numero se encuentra en la lista " + posicion)

}else{
    console.log("el numero no se encuentra en la lista")
}

