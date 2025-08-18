//ejercicio 16:
/*
Escriba una función que genere una MacAddress aleatoria.
ejemplo 00:1A:2B:3C:4D:5E
*/
//funciona re re bien, un poco de ayuda 
function randomHex(){
    let num = Math.floor(Math.random()*255);
    let numHexa = num.toString(16).toUpperCase(); //toString(16) => pasa el num a hexa, toUpperCase() => pasa todo a mayuscula 
    return numHexa.padStart(2, "0"); //padStart(2, "0") => corrije el 93:B:5D:B9:14:D8 a 93:0B:5D:B9:14:D8 , el 2 significa que va haber 2 digitos y el "0", lo que va a colocar si no hay nada 
}
function MacAddress(){
    console.log(` Su numero de MacAddress: ${randomHex()}:${randomHex()}:${randomHex()}:${randomHex()}:${randomHex()}:${randomHex()}`);
}
MacAddress();