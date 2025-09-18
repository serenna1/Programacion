//ejercicio 6:
/*
Escriba una función convertRgbToHexa que convierta rgb a color hexa y
devuelva un color hexa.

*/
//me costo una banda hay que escribirlo a papel
function convertRgbToHexa(numeroRgb) {
  let numerorgbActual = [];
  numerorgbActual = numeroRgb.split(",");
  const r = parseInt(numerorgbActual[0]);
  const g = parseInt(numerorgbActual[1]);
  const b = parseInt(numerorgbActual[2]);
  return `rgb(#${r.toString(16).padStart(2, "0")}${g
    .toString(16)
    .padStart(2, "0")}${b.toString(16).padStart(2, "0")})`;
}

console.log(convertRgbToHexa(`255, 0, 255`));
console.log(convertRgbToHexa(`0, 255, 0`));
console.log(convertRgbToHexa(`75, 75, 92`));
console.log(convertRgbToHexa(`75, 75, 92`));

//para reeemplazar linea 14 el metedo concat
/*
 Mover los elementos existentes
for (let i = 0; i < numeros.length; i++) {
    nuevoArray[i + 1] = numeros[i]; // Mover elementos a la derecha
}
console.log(nuevoArray); // ["#", "1", "2", "3"] 
*/
// el .toString(16) solo fucniona si es sobre numeros
//cadena = "255, 0, 255"
//cadena_sin_espacios = cadena.replace(" ", "")
//print(cadena_sin_espacios)  # Esto imprimirá: 255,0,255
