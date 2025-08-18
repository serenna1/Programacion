//ejercicio 13:
/*
Declare un nombre de función evensAndOdds . Toma un entero positivo como parámetro y
cuenta el número de pares e impares en el número.
*/
//funciona, lo unico que consulte fue sobre el return
function evensAndOdds (numeroPositivo){
    let acumuladorDePares = 0;
    let acumuladorDeImpares = 0;
    if (numeroPositivo <= 0 ){
        console.log(`Debe colocar un numero positivo, vuelva a intentarlo`);
        return; //aca porque seguia iterando sobre los negativos y el 0, porque ne un if no puedo usar el break;
    }
    for(let i = numeroPositivo;i >  0; i--){
        if(i % 2 === 0){
           acumuladorDePares += 1;
        }else 
            acumuladorDeImpares += 1;
    }
    console.log(`
        Su numero: ${numeroPositivo}
        tiene ${acumuladorDePares}, cantidad de numero pares y
        tiene ${acumuladorDeImpares}, cantidad de numeros impares`);
}
evensAndOdds(0);
evensAndOdds(-2);
evensAndOdds(5);
evensAndOdds(100);
