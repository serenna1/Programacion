//ejercicio 2:
/*
Escribe un nombre de función rgbColorGenerator y genera colores rgb.
ejemplo:
rgbColorGenerator()
rgb(125,244,255)
*/
//funciona (lo hice yo)
function rgbColorGenerator(){
    let array = [];
    for (let i = 0 ; i < 3; i++){
        let numeroAleatorio = Math.floor(Math.random() * 256);
        array.push(numeroAleatorio);
        
    }
    console.log(`rgb(${array.join()})`);
}
rgbColorGenerator();