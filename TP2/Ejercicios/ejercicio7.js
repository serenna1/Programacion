//Realiza un diagrama de flujo que dado 3 números, 
// muestre por pantalla cual es menor, cuales mayor y cual está entremedio
//  de los otros dos. Dado el diagrama construido realiza un programa que materialice 
// lo diseñado en el diagrama.

let num1 = 7;
let num2 = 4;
let num3 = 9;
console.log(`Hay 3 numeros con distintos valores cada uno, tiene que identifcarse, el menor, el de medio y el mayor`);
console.log(`${num1} , ${num2}, ${num3}`);

if (num1 > num2 && num1> num3){
    console.log(`es mayor es el ${num1}`)
    if(num2 > num3){
        console.log(`el numero del medio es el ${num2}`)
        console.log(`el numero menor es el ${num3}`);
    }else
    console.log(`el numero ${num2} es el menor`);
    console.log (`el numero ${num3} es el del medio`)
}else if (num2 > num1 && num2 > num3){
    console.log (`El numero ${num2} es el mayor`)
    if(num1 > num3){
        console.log(`El numero del medio es el ${num1}`)
        console.log(`El numero menor es el ${num3}`);
    }else
    console.log(`El numero menor es el ${num1}`);
    console.log(`El numero ${num3} es el de medio `)
    
        
    
}else if (num3 > num2 && num3 > num1){
    console.log (`el numero ${num3} es el mayor`)
    if (num2 > num1){
        console.log(`El numero del medio es ${num2}`)
        console.log(`El numero menor es el ${num1}`)
    }else
        console.log(`El numero ${num2} es el menor`);
        console.log(`El numero ${num1} es el del medio `);
    
    
}