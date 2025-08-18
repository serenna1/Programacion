//ejercicio 17:
/*
Declare un nombre de función randomHexaNumberGenerator. Cuando se llama a esta fun-
ción, genera un número hexadecimal aleatorio. La función devuelve el número hexadeci-
mal.
ejemplo del tp '#ee33df'
*/
function randomHexaNumberGenerator (){
    let numAleatorio = Math.floor(Math.random()*16777215);// este num me lo tiro la ia 
    let numHexa = numAleatorio.toString(16).toUpperCase();
    console.log(`#${numHexa.padStart(2, '0')}`);
}
randomHexaNumberGenerator();
