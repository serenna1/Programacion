//Crear un arreglo de 10 números y mostrar solo los mayores a 5.
function E8 (){
    let arreglo= [1, 5, 32, 7, 6, 10, -2, -8, 5, 9];
    let resultado= [];
    let j = 0;

    for (let i = 0; i < arreglo.length; i ++){
        if (arreglo[i] > 5 ){
            resultado[j]= arreglo[i];
            j = j + 1;
        }
           
    }
    console.log(arreglo);
    console.log("los numeros mayores a 5 en este arrglo son: " + resultado );
}
E8();