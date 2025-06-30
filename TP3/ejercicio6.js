/*
Realiza un script que escriba los números del 1 al 500, que indique cuales son múltiplos de 4 y
de 9 y que cada 5 líneas muestre una línea horizontal.
*/

for(let i=1; i <= 500;i++ ){
    if (i % 4==0 && i % 9 == 0){
        console.log (i, "multiplo de 4 y 9");
    }
    else if(i % 5==0 ){
        console.log(i, "-");
    } else {
        console.log (i);
    }
}
