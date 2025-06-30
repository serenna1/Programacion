const prompt = require ("prompt-sync")();
let num= prompt("ingres un numero del 1 al 10 : ");
//let num= "";
let resultado="";
let usuario= Number(num);

if (usuario > 50){
    console.log("ingreso un numero mayor a 10, fin del programa");
} else {
    for (let i = 1; i <= usuario ; i ++ ){
        resultado = resultado + i ;
        console.log(resultado);
    }
}



