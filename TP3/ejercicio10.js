 const prompt = require(`prompt-sync`)();

let usuario, sumasT,sumas7, num, promedio1, promedio2 ;
let todos =[]; //todos los numeros
let mayor = []; //mayor a 7
sumas7=0;
sumasT=0;

do {
usuario = prompt("escriba notas del alumnos: ");
if (usuario !== "fin"){
num= Number (usuario);

    if (num >= 7) {
    mayor.push(num);
    
    }else{
    todos.push(num);
    }
}
 } while (usuario !== "fin");
for(let i = 0 ; i <= mayor.length  ; i++){
    sumas7 += mayor[i];
}
for (let i = 0 ; i <= todos.length; i++){
    sumasT += todos [i]
}
promedio1 = sumas7 / mayor.length; 
promedio2 = sumasT / todos.length;

console.log ("el promedio de nota mayores a 7 es: ", promedio1);
console.log("el promedio de las notas totales es: ", promedio2);