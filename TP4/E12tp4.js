//12. Mostrar los elementos de un arreglo y al mismo tiempo indicar si son pares o
//impares.
function numeros(){
 let arreglo = [2, 3, 6, 11, 13, 24];
 let pares=[];
 let impares=[];

 console.log(arreglo);
    for( let i = 0 ;i < arreglo.length; i ++ ){
    if( arreglo[i] % 2===0 ){
        pares[pares.length] = arreglo[i];
    }else{
        impares[impares.length]= arreglo[i];
        
    }
}
console.log(`Estos numeros son pares ${pares} `)
console.log(`Estos numeros son impares ${impares}`)
}
numeros();
/*[ 2, 3, 6, 11, 13, 24 ]
Estos numeros son pares 2
Estos numeros son impares 3
Estos numeros son pares 6
Estos numeros son impares 11
Estos numeros son impares 13
Estos numeros son pares 24
*/
//  quiero que diga 
//  Estos numeros son pares 2, 6, 24
//  Estos numeros son impares 3, 11, 13