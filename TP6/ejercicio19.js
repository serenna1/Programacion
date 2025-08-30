/*
Escriba una función que devuelva una matriz de nueve números aleatorios en
un rango de 0 a 25. Todos los números deben ser únicos.
ejemplo:[ [1, 14, 5], [7, 24, 8], [0, 18, 13]]
*/
//funciona
function matrizNúmerosAleatorios() {
  let arrayPrincipal = [];

  for (let fila = 0; fila < 3; fila++) {
    let array = [];
    for (let posArray = 0; posArray < 3; posArray++) {
      let numero = Math.floor(Math.random() * 26);
      array[posArray] = numero;
    }
    let filaCopia = [];
    for (let i = 0; i < 3; i++) {
      filaCopia[i] = array[i];
    }
    arrayPrincipal[fila] = filaCopia;
  }

  console.log(arrayPrincipal);
}
matrizNúmerosAleatorios();
