/*
Realiza un script que dada una lista de números devuelva el mayor y el menor de esa lista y
donde se encuentra cada uno.
*/
let lista = [1, 2, 3, 4, 5];
let mayor = lista  [0];
let menor =lista [0];
let posicion1=0;
let posicion2=0;
for (let i = 0; i < lista.length; i++ ){
    if (mayor< lista[i]){
        mayor = lista[i];
        posicion1 = i;

    }else if (menor > lista [i]) {
        menor = lista[i];
        posicion2= i;
    }
}
console.log("el mayor es: "+ mayor + " y esta en la posicion " + posicion1 );
console.log("el menor es: "+ menor+ " y esta en la posicion "+ posicion2  );