//capitulo 4 objetos 

let diario = [];

function añadirEntrada(eventos, ardilla) {
  diario.push({eventos, ardilla});
}
añadirEntrada( ["comer", "caminar"], true);
console.log(diario);
//metodos importantes 
let listaDeTareas = [];
function recordar(tarea) {
  listaDeTareas.push(tarea);
}
function obtenerTarea() {
  return listaDeTareas.shift();
}
function recordarUrgentemente(tarea) {
  listaDeTareas.unshift(tarea);
}

//ejercicios del cap 4.
//ejercicio 1 la suma de un rango (funcionan)
/*
 Escribe una función rango que tome dos argumentos, inicio y final, y retorne un array que contenga todos
 los números desde inicio hasta (e incluyendo) final. Luego, escribe una función suma que tome un array de 
 números y retorne la suma de estos números. Ejecuta el programa de ejemplo y ve si realmente retorna 55.
*/

function rango (inicio,final,paso){
 let arrayResultado = [];
 if (paso === undefined) paso = 1;
 if (paso >= 0){
  for (inicio ; inicio <= final;inicio += paso ){  //otra opcion for (; inicio <= final; inicio++) no agregamos la primer parte del for ya que esta definido ya inicio
  
  arrayResultado.push (inicio);
 }
 }
 if (paso < 0 ){
  for (inicio ; inicio <= final;inicio += paso ){  //otra opcion for (; inicio <= final; inicio++) no agregamos la primer parte del for ya que esta definido ya inicio
  
  arrayResultado.push (inicio);
 }
 }
 return arrayResultado;
}
function suma (array){
  console.log(`El arreglo a sumar es: ${array}`);
  let acumuladorvalor = 0;
  for(let i = 0; array [i];i++){
  acumuladorvalor = acumuladorvalor + array[i];
  }
  

  return "resultado de la suma del arreglo: " + acumuladorvalor;
}

console.log(suma(rango(1,10,2)));

//ejercicio 2 revirtiendo un array: (funcionan)
/*
Los arrays tienen un método reverse que cambia al array invirtiendo el orden en que aparecen sus elementos. 
Para este ejercicio, escribe dos funciones, revertirArray y revertirArrayEnSuLugar. El primero, revertirArray, 
toma un array como argumento y produce un nuevo array que tiene los mismos elementos pero en el orden inverso. 
El segundo, revertirArrayEnSuLugar, hace lo que hace el métodoreverse: modifica el array dado como argumento 
invirtiendo sus elementos. Ninguno de los dos puede usar el método reverse estándar.
*/

//El primero:
function revertirArray (arreglo){
  
  let acumulador = [];
  for (let i = arreglo.length -1; i >= 0  ; i--){
     
    acumulador.push(arreglo[i]); 
     
  }
  
  console.log(`El arrreglo a dar vuelta es: ${arreglo}`);
  return acumulador;
}
console.log(revertirArray([3,2,6]));

//El segundo:
function revertirArrayEnSuLugar (arreglo){
  for (let i = 0 ;  i < Math.floor(arreglo.length / 2) ; i++){
    let temp = arreglo[i];
    arreglo[i] = arreglo[arreglo.length - 1 - i];
    arreglo[arreglo.length - 1 - i] = temp;
    
  }

  return arreglo;
}
let array = [1,2,3,4,5];
console.log(revertirArrayEnSuLugar(array));


//ejercicio 3 Una lista (funcionan)
/*
Escribe una función arrayALista que construya una estructura de lista como el que se muestra arriba cuando se le da [1, 2, 3] 
como argumento. También escribe una función listaAArray que produzca un array de una lista. Luego agrega una función de utilidad preceder,
que tome un elemento y una lista y creé una nueva lista que agrega el elemento al frente de la lista de entrada, y posicion, que toma una 
lista y un número y retorne el elemento en la posición dada en la lista (con cero refiriéndose al primer elemento) o undefined cuando no
exista tal elemento.
*/
//El primero:
function arrayALista(array){
  if (array.length === 0){
    return null;
  }else 
    return{
      valor: array[0],
      resto : arrayALista(array.slice(1))
    };

  
  
}
console.log(arrayALista([1,2,3]));
console.log(`primer funcion`);
// js cuando un objete tiene 4 nodos directamente imprime //[object] // si deseamos mostrar deberiamos de hacer algo asi 
//console.log(JSON.stringify(arrayALista([1,2,3,4,5], null, 2)));
/* que significa el null y el 2 que estan en los () antes que JSON.stringify, La función JSON.stringify tiene tres parámetros:
JSON.stringify(value, replacer, space), en este ejemplo el valor es el objeto no?, replacer, es opcional puede ser una función
o un array que permite controlar qué propiedades se incluyen en la cadena JSON, en nuestro caso no nocesitamso filtar propiedade por ende 
agregamos null, y space tambien es un parametro opcional se utiliza para agregar espacios en blanco (indentación) a la cadena JSON 
es para que sea mas legible 
*/
//El segundo:
// la otra parte del ejercicio es crear una funcion que pase esta lista con objetos de nuevo al arreglo 
function listaAArray (lista){
  let array=[];
  while(lista != null){
     
   array.push(lista.valor)
   lista = lista.resto
  }
  return array;
  
}

console.log (listaAArray(arrayALista([1,2,3])));
console.log(`segunda funcion`);

//funcion que agrega unn objeto a la funcion de las listas(primer funcion)
function preceder (nuevoValor, functionListas){
  let objetoNuevo = {
    valor: nuevoValor,
    resto:functionListas
  }
  
  return objetoNuevo;
}
console.log(preceder(0,arrayALista([1,2,3])));
console.log(`tercer funcion`);

//ejercicio 4 Comparación profunda.(funciona)
/*
El operador == compara objetos por identidad. Pero a veces preferirias comparar los valores de sus propiedades reales.
Escribe una función igualdadProfunda que toma dos valores y retorne true solo si tienen el mismo valor o son objetos con 
las mismas propiedades, donde los valores de las propiedades sean iguales cuando comparadas con una llamada recursiva a igualdadProfunda.
Para saber si los valores deben ser comparados directamente (usa el operador == para eso) o si deben tener sus propiedades comparadas, 
puedes usar el operador typeof. Si produce "object" para ambos valores, deberías hacer una comparación profunda. Pero tienes que
tomar una excepción tonta en cuenta: debido a un accidente histórico, typeof null también produce "object".
La función Object.keys será útil para cuando necesites revisar las propiedades de los objetos para compararlos.
*/

function igualdadProfunda (valor1, valor2){
  let propiedades1 = Object.keys(valor1);
  let propiedades2 = Object.keys(valor2);
  if (valor1 === valor2){
     return true; 
  }
  if (typeof valor1 === 'object' &&  valor1 != null && typeof valor2 === 'object' &&  valor2 != null ){
    
    if (propiedades1.length != propiedades2.length){
    return false; 
  }
  for (let clave of propiedades1) {
       if (!igualdadProfunda(valor1[clave], valor2[clave])) {
           return false;
       }
   }
  
  return true;

  }
  return false;
}
let objeto = {aqui: {hay: "un"}, objeto: 2};
console.log(igualdadProfunda(objeto, objeto));
console.log(igualdadProfunda(objeto, {aqui: 1, object: 2}));
console.log(igualdadProfunda(objeto, {aqui: {hay: "un"}, objeto: 2}));