/*
var myName: "paola";

console.log("hola" + " " + myName);

console.log("------------------");

saludo();

var myName: "lucas";
console.log("hola" + " " + myName);

console.log("------------------");
saludo();

var myName: "serena"
console.log("hola" + " " + myName);
saludo();

FUNCIONES: Si hay un mismo codigo que se repite varias veces es una interacciòn, ¿como encapsulamos 
este codigo que se repite? con una FUNCIÒN

FUNCTION SALUDO (){
console.log(".................");
console.log("hola" + "" + myName);                      asi metemos todo el codigo suelto en 1 funciòn
console.log("como estas?");
console.log(",,,,,,,");
                  } saludo()                        


la funcion consta de dos partes 1 es declarar la funcion y otra parte llamar a la funciòn.
la declaramos encapsulando el codigo adentro de la fucion.
la llamamos a traves de su  nombre por ejemplo, despues de cerrar la llave ponemoos saludo()

parametro es un dato de entrada
FUNCTION SALUDO2 (myNameInput : ACA ESTA EL PARAMETRO QUE ES UNA VARIABLE QUE EMPIEZA EN LA FUNCION){
console.log(".................");
console.log("hola" + "" + myNameInput);                    
console.log("como estas?");
console.log("estoy bien gracias por preguntar");
console.log(".................");
                  } saludo2("paola")
                   saludo2("lucas")
                   saludo2("serena")

DIFERENCIAS ENTRE VAR Y LET
VAR me permite reedefinir una variable
LET la definiciòn de una variable pero que no se puede reedefinir

La variables que nosotros definimos dentro de una funcion, obtienen el alcancè de la funciòn

FUNCTION alcance (){
myName: serena;
console.log(".................");
console.log("hola" + "" + myName);                    
var apellido = rotonda;
console.log ("mi apellido es: " + apellido);
}
 alcance();
 

console.log(myName);
console.log(apellido);


*/