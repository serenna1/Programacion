//Crear un arreglo de 10 números. Calcular la cantidad de números positivos,
//negativos y ceros.
function numeros (){
    let arreglo=[1, -3 ,0, 3, -6, 0, 10];
    let positivo = 0;
    let negativo= 0; 
    let cero = 0;
    for(let i= 0; i < arreglo.length ; i++ ){
        if (arreglo[i]>= 1 ){
            positivo++
        }
        if (arreglo[i]<= -1){
            negativo++
        }
        if (arreglo[i]=== 0){
            cero++
        }

    }
    console.log("en este arreglo hay " + positivo +" numeros positivos");
    console.log("en este arreglo hay " + negativo +" numeros negativos");
    console.log("en este arreglo hay " + cero +" numeros iguales a 0 ");

}
numeros();