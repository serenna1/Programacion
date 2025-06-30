//const prompt = require("prompt-sync")();
/*
let palabra = [];
let i = 0;
let resultado = "";
let cancelar = "";
do {
    palabra[i] = prompt("ingrese palabras  ");
    resultado =resultado + palabra[i] + "-";
    if (palabra[i] = "cancelar" ){
        console.log(palabra[i]+ "  ")
    }


    
    

} while (palabra[i]!== "cancelar"){
    
}

console.log("Fin del progama");
console.log(resultado );
*/
const prompt = require("prompt-sync")();


let resultado = "";
let palabra = "";

do {
    palabra = prompt("ingrese palabras  ");
    
    if (palabra !== "cancelar"){
        resultado = resultado + palabra + "-"; 
    }
} while (palabra !== "cancelar")
    
    console.log("fin");
    console.log (resultado);

//locomentado no funciona :
//let resultado = "resultado"
//let nuevapalabra = "";
//resultado =resultado + nuevapalabra;



//no usar arreglo, si no concatenar 
// para hacer lo de las cadenas 


