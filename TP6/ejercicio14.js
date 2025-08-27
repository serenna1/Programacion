//ejercicio 14:
/*
Escriba una función llamada modificarArray que tome la matriz como parámetro
y modifique el quinto elemento de la matriz y devuelva la matriz. Si la longitud
de la matriz es inferior a cinco, devuelve 'elemento no encontrado'.
ejmeplo 
console.log(modifyArray(['Aguacate', 'Tomate', 'Patata','Mango',
'Limón','Zanahoria']);
['Aguacate', 'Tomate', 'Papa', 'Mango', 'LIMÓN', 'Zanahoria']
*/

function modificarArray(matrizAModificar){
    let elementoModificado = 0;
    if (matrizAModificar.length < 6 ){
        return `elemento no encontrado`;
    }
   elementoModificado = matrizAModificar[5].toUpperCase();
   matrizAModificar[5] = elementoModificado;
   return matrizAModificar;
}
console.log(modificarArray(['Aguacate', 'Tomate', 'Patata','Mango']));
console.log(modificarArray(['Aguacate', 'Tomate', 'Patata','Mango','Limón','Zanahoria']));