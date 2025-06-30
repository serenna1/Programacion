//Realiza una aplicación que dado dos valores 
// numéricos ingresados por el usuario, indique en pantalla cual es
//  el mayor y cual es el menor.
    const prompt = require("prompt-sync")();
    console.log(`Ingrese dos numeros, la aplicacion va a poder definir cual numero es mayor, menor o igual`)
    usuario = 0;
    resultado1 = 0;
    resultado2 = 0;
    usuario = Number (prompt (`Ingrese un numero: `));
    resultado1 = usuario;
    usuario = 0;
    usuario = Number (prompt (`Ingrese otro numero: `));
    resultado2 = usuario;
if (resultado1 > resultado2){
    
    
    console.log(`El numero ${resultado1} es mas mayor a ${resultado2}`);

}else if(resultado1 === resultado2){
    
    console.log(`Los dos numeros que ingreso tienen el mismo valor`);

}else
console.log(`El numero ${resultado1} es menor a ${resultado2}`);
