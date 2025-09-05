/*
-escribir una funcion que reciba un texto y devuelva solo las vocales de este texto
-escribir una funcion que cuente cuantas vocales tiene una palabra
-escribir una funcion que reciba dos frases que diga cual tiene mas vocales

*/
//hola
function devolverVocales(frase) {
  let vocales = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  let newArray = [];
  let newPos = 0;
  for (pos of frase) {
    for (let i = 0; i < vocales.length; i++) {
      if (pos === vocales[i]) {
        newArray[newPos] = pos;
        newPos++;
      }
    }
  }
  return newArray;
}
devolverVocales("hola ea"); //[ 'o', 'a', 'e', 'a' ]

function devolverVocalCantidad(array) {
  return array.length;
}
console.log(devolverVocalCantidad(devolverVocales("hola ea")));

function cualTieneMasVocales(frase1, frase2) {
  let vocales = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  let cantidadDeVocalesF1 = 0;
  let cantidadDeVocalesF2 = 0;
  for (pos of frase1) {
    for (let i = 0; i < vocales.length; i++) {
      if (pos === vocales[i]) {
        cantidadDeVocalesF1++;
      }
    }
  }
  for (pos of frase2) {
    for (let i = 0; i < vocales.length; i++) {
      if (pos === vocales[i]) {
        cantidadDeVocalesF2++;
      }
    }
  }
  console.log(`las frases a comparar son: ${frase1}, ${frase2}`);
  if (cantidadDeVocalesF1 > cantidadDeVocalesF2) {
    console.log(
      `la frase que tiene mas vocales es: ${frase1}, con ${cantidadDeVocalesF1} vocales`
    );
  } else
    console.log(
      `la frase que tiene mas vocales es: ${frase2},con ${cantidadDeVocalesF2} vocales`
    );
}
cualTieneMasVocales("hola ea", "aHhvcanaae");
