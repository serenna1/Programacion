//ejercicios del capitulo 6 Funciones de orden superior 
/*
Aplanamiento:Use el método reduce en combinación con el método concat para “aplanar” 
un array de arrays en un único array que tenga todos los elementos de los arrays originales.
*/
//funciona
function aplanamiento (arrays){
 arrayacumulador = [];

   return arrays.reduce((arrayacumulador,valoractual)=> { //valor actual es el valor acutual de cada iteracion 
       return arrayacumulador.concat (valoractual);
       //primera iteracion: 
       //arrayacumulador = [] array vacio
       //valoractual= [1,2,3]
       //segunda iteracion:
       //arrayacumulador = [1,2,3]
       //valoractual = [4,5]
       //tercera iteracion:
       //arrayacumulador = [1,2,3,4,5]
       //valoractual = [6]


    },[]);
 
}

console.log(aplanamiento([[1,2,3],[4,5],[6]]));
/*
No necesitas definir elemento antes de usarlo; es un parámetro que se pasa automáticamente a la función de 
callback de reduce en cada iteración.
*/






function ciclo (valor){
  

}