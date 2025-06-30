//Contar cuántos números pares hay en un arreglo.
function pares (){
    let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
    
    for(let i = 1 ; i < arreglo.length ; i++){
    if ( arreglo[i] % 2 === 0 ){
        console.log (arreglo[i]);
    }
       
}
}
pares();