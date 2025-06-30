//Calcular el promedio de un arreglo de 5 números.
function promedial (){
    let promedio = 0;
    let suma = 0 ;
    let arreglo = [1, 2, 4 , 6, 7 ];

    for (let i = 0; i < arreglo.length; i ++ ){
        suma = suma + arreglo[i]

    }
    promedio = suma / arreglo.length;
    console.log("el promedio es  "+ promedio);
}
promedial();