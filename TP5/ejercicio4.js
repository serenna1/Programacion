//ejercicio 4
/*
Escriba un nombre de función showDateTime que muestre la hora en este formato:
01/08/2020 04:08 usando el objeto Date (para esto debes importar datetime).
*/
//funciona
function showDateTime (){
    let fecha = new Date(); 
    let dia = fecha.getDate();
    let mes = fecha.getMonth() +1; // se le suma uno porque mepieza en 0
    let anio = fecha.getFullYear();
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
   // ahora tenemos que intentar que tenga dos digitos 

   if(dia < 10 ){
    dia = "0" + dia
    }
   if(mes < 10 ) {
    mes = "0" + mes
    }
   if(horas < 10 ){
    horas = "0" + horas
   } 
   if( minutos < 10){
    minutos = "0" + minutos
   }
   //ahora imprimimos por consola 
   console.log(dia +"/"+ mes +"/"+ anio + " " + horas +":"+ minutos);
    
}
showDateTime();