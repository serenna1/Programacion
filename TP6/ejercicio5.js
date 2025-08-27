//ejercicio 5:

/*
Escriba una función convertHexaToRgb que convierta el color hexa a rgb y
devuelva un color rgb.
*/
function convertHexaToRgb(colorHex){
    if (colorHex[0] === "#"){
        colorHex = colorHex.slice(1);
    }
   // const convierte = parseInt(colorHex, 16);//convierte el hexa a decimlal 
    const r = parseInt(colorHex.substring(0, 2),16);//hex.substring(0, 2) toma los primeros dos caracters del numero hexa y el , 16 los convierte a decimal 
    const g = parseInt(colorHex.substring(2, 4),16);
    const b = parseInt(colorHex.substring(4, 6),16);
    return `rgb(${r}.${g}.${b})`;
}
console.log(convertHexaToRgb("#FF00FF"));  // Salida: rgb(255, 0, 255)
console.log(convertHexaToRgb("#00FF00"));  // Salida: rgb(0, 255, 0)
console.log(convertHexaToRgb("#0000FF"));  // Salida: rgb(0, 0, 255)