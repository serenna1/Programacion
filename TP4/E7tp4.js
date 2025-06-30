//Mostrar el mayor número de un arreglo definido dentro de la función.
function mayor(){
    let arreglo = [-1, 4, -6, 10];
    let acumula = arreglo[0] ;

    for(let i = 0;i < arreglo.length; i ++){
        
        if ( arreglo[i] > acumula ){
            acumula = arreglo[i]
            
        }
    }

 console.log(arreglo)
 console.log( "el numero mayor del arreglo es: "+ acumula );   
}
mayor();