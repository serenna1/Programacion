//Contar cuántas veces aparece un número específico dentro de un arreglo.
function E9(){
    let numeroBuscado = 5;
    let arreglo = [1, 5, 10, 11, 5, 9, 6, 7, 8];
    let resultado = [];
    let contador= 0;
    for (let i = 0; i < arreglo.length; i++){
       if(arreglo[i] === numeroBuscado){
          contador = contador + 1;
        }


    }
    console.log(arreglo);
    console.log("el numero asignado a parece: "+ contador + " veces " );
}

E9();