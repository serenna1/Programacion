//ejercicio 1:
/*
Modifique la función userIdGenerator. Declare un nombre de función
userIdGeneratedByUser. No toma ningún parámetro pero toma dos entradas
usando prompt(). Una de las entradas es la cantidad de caracteres y la
segunda entrada es la cantidad de ID que se supone que se generarán.
*/
const prompt = require ("prompt-sync")();
function letrasMayusculasRandom(){
    let letrasMayusculasAlazar = ['A','B','C','D','E','F','G','H','I','J','K','L','N','M','O','P','Q','R','S','T','X','Y','Z'];
    let numeroPosicionAlazar = Math.floor(Math.random()*letrasMayusculasAlazar.length);//letrasAlazar.length es el num de posiciones dle arreglo
    let letraAleatoria = letrasMayusculasAlazar[numeroPosicionAlazar];
    return letraAleatoria;
    
}
function letrasMinusculasRandom(){
    let letrasMinusculasAlazar = ['a','b','c','d','e','f','g','h','i','j','k','l','n','m','o','p','q','r','s','t','x','y','z'];
    let numeroPosicionAlazar = Math.floor(Math.random()*letrasMinusculasAlazar.length);//letrasAlazar.length es el num de posiciones dle arreglo
    let letraAleatoria = letrasMinusculasAlazar[numeroPosicionAlazar];
    return letraAleatoria;
    
}
function userIdGeneratedByUser (){
    let cantidadDeIDs = prompt ('Ingres cuantos ID desea generar: ');
    cantidadDeIDs = parseInt(cantidadDeIDs);
    let cantidadDeCaracters = prompt('Ingrese la cantidad de caracters que van a tener los ID: ');
    cantidadDeCaracters = parseInt (cantidadDeCaracters);
    
    
    let idGerados = [];
   
    for (let i = 0; i < cantidadDeIDs; i++){
         let idActual = '';
         for (let e = 0 ; e < cantidadDeCaracters; e++ ){
             
                if (Math.random() < 0.5){   // 50%: Letra (minúscula o mayúscula)
                if (Math.random() < 0.5){  // 50% dentro de las letras: minúscula
                    const letraMin = letrasMinusculasRandom();
                    idActual += letraMin;
                }else{  // 50% dentro de las letras: mayúscula
                    const letraMay = letrasMayusculasRandom();
                    idActual += letraMay;
                }
                
              }else{  // 50%: Número
                const numAleatorio = Math.floor(Math.random()*10).toString(); // toString convierte el numero a string, para que se concadene 
                idActual += numAleatorio;
              }
                
               
                
            }  
            idGerados.push(idActual);
            idActual = '';
            
    }
   console.log (idGerados.join('\n'));
    

}
userIdGeneratedByUser();