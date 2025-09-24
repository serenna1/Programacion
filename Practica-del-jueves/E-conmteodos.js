/*
1.El usuario ingresa un string de palabras, las cuales 
se deben revisar y eliminar las pabras prohibidas.las palabras prohibidas se tendran en un arreglo
de palabras prohibidas.
2.El usuario ingresa un texto con edades separadas con coma (,). Se debe devolver un 
promedio de edades de las personas menores a 18 años y un promedio de mayores de 18 años 
3. Un usuario ingresa un texto de nombres de personas junto con la cuidad de residencia,
el nombre y la ciudad se encuentran separados por coma y cada conjunto de datos se 
separan con guin(-) ej: Pablo,tandil-pedro,azul
*/
//ejercicio 1:funciona

let palabrasProhibidas = ["fuck", "mierda"];
let texto = "algo algoago algoalgo fuck alllgoo aaalgo mierda aalgo ";

function prueba(texto) {
  let destringAArray = texto.split(" ");
  console.log(destringAArray);
  for (let i = 0; i < palabrasProhibidas.length; i++) {
    for (let e = 0; e < destringAArray.length; e++) {
      if (palabrasProhibidas[i] === destringAArray[e]) {
        destringAArray.splice(e, 1);
      }
    }
  }
  console.log(destringAArray);
}
prueba(texto);

//ejercicio 2:funciona

function promedioEdades() {
  let edades = [15, 12, 18, 19, 22, 55, 60];
  let personasMayores = 0;
  let personasMenores = 0;
  let mayores = 0;
  let menores = 0;
  let resultadoMayores = 0;
  let resultadoMenores = 0;
  for (let i = 0; i < edades.length; i++) {
    if (edades[i] >= 18) {
      personasMayores++;
      mayores += edades[i];
    } else if (edades[i] < 18) {
      personasMenores++;
      menores += edades[i];
    }
  }
  resultadoMayores = mayores / personasMayores;
  resultadoMenores = menores / personasMenores;
  console.log(`las edades: ${edades}`);
  console.log(`El promedio de las personas mayores: ${resultadoMayores}`);
  console.log(`El promedio de las personas menores: ${resultadoMenores}`);
}
promedioEdades();

//ejercicio 3:funciona
function usuario() {
  let usuario1 = "Pablo,tandil";
  let resultado = usuario1.replace(",", "-");
  console.log(resultado);
}
usuario();
