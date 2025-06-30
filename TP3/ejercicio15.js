//15) Realiza un script que dada una lista de caracteres devuelva si la misma es un palindromo o no.
let lista= ["a", "b","b", "a"];
let bandera= true; //palindromo

for(let i = 0  ; i < lista.length/2 ; i++){
   if(lista[i] !== lista [lista.length -1 -i]){
    bandera= false;
    break;

   }
    
}
if (bandera){
console.log("palindromo")}
else{
    console.log("no es paindromo")
}
