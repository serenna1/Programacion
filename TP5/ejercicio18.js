//ejercicio 18:
/*
Declare un nombre de función userIdGenerator. Cuando se llama a esta función, genera
una identificación de siete caracteres. La función devuelve el id.
ejemplo : 41XTDbE
*/
//funciona tiene batsante ayuda de ia, e incluso se puede arregla porque no tiene letras minuscylas 
function letrasRandom(){
    let letrasAlazar = ['A','B','C','D','E','F','G','H','I','J','K','L','N','M','O','P','Q','R','S','T','X','Y','Z'];
    let numeroPosicionAlazar = Math.floor(Math.random()*letrasAlazar.length);//letrasAlazar.length es el num de posiciones dle arreglo
    let letraAleatoria = letrasAlazar[numeroPosicionAlazar];
    return letraAleatoria;
    
}

function userIdGenerator(){
    
    let id = '';
    for (let i = 0; i < 7; i ++){
        if (Math.random() < 0.5){ // 50% de probabilidad 
            
        const letra = letrasRandom();
        id += letra; 
        } else{
        const numAleatorio = Math.floor(Math.random()*10);//genera del 0 al 9
        id += numAleatorio;
        }

    }
    return id 

}
console.log(userIdGenerator());