//Mostrar los números del 10 al 1 (en orden descendente).
function DelDiezAlUno(){
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(numeros + " se mostrara los numeros del 10 al 1: ");
    for(let i = numeros.length -1 ; i >= 0 ; i --){
       
        console.log(numeros[i]);
    }

    
}
DelDiezAlUno();