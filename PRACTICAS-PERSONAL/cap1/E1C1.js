  //ejercicios del cap estructura del programa:
  /*
  Escriba un ciclo que haga siete llamadas a console.log para generar el siguiente triángulo:

#
##
###
####
#####
######
#######
  */
 //funciona:

let signo = "#";
let signo2 = "#";
let acumulador=0;
console.log(signo)
for (let i = 0; i <= 6; i ++){
    signo += signo2;
    console.log(signo);
  

}

/*
Escribe un programa que use console.log para imprimir todos los números de 1 a 100, con dos excepciones. 
Para números divisibles por 3, imprime "Fizz" en lugar del número, y para los números divisibles por 5 (y no 3), 
imprime "Buzz" en su lugar.Cuando tengas eso funcionando, modifica tu programa para imprimir "FizzBuzz", para números
 que sean divisibles entre 3 y 5 (y aún imprimir "Fizz" o "Buzz" para números divisibles por solo uno de ellos).
*/
//funciona:

let numb = 1;
for (let i = 1; i <=100; i++){
    console.log(`El numero ${numb}, es divisible por 3 o 5?`)
    if(numb % 3 == 0 && numb % 5 ==0 ){
        console.log(`FizzBuzz`);
    }else if(numb % 5 == 0){
        console.log(`Buzz`)
    }else if (numb % 3 == 0 ){
        console.log(`Fizz`);
    }else
        console.log(`El numero no es divisible ni de 3 ni de 5`);
    
    numb ++;

    
}

/*
Escribe un programa que cree un string que represente una cuadrícula de 8 × 8, 
usando caracteres de nueva línea para separar las líneas. En cada posición de la 
cuadrícula hay un espacio o un carácter "#". Los caracteres deberían de formar un tablero de ajedrez.
*/
//funciona:
let tablero = "# # # #";
 for (let i = 0; i <=3 ;i++){
    console.log (tablero);
    console.log( " " + tablero);
}