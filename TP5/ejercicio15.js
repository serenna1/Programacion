//ejercicio 15:
/*
Escriba una función que genere un randomUserIp.
Un "random user IP" se refiere a una dirección IP generada de manera aleatoria.
*/
//funciona, pero puede ser mas facil que lo del arreglo:
function randomOctet (veces){
    let numero = Math.floor(Math.random()*255)+1;
    let numFinal = [];
    for (let i = 0; i < veces; i++){
        
        numFinal.push(numero);
        numero = Math.floor(Math.random()*255)+1;
        
    }
    console.log(numFinal);
}
function randomUserIp(){
    randomOctet(4);

}
randomUserIp();
//segunda opcion:
function randomOctet2 (){
    let numero = Math.floor(Math.random()*255)+1;
    return numero;
    
}
function randomUserIp2(){
    randomOctet2();
    console.log(` Su numero de IP :${randomOctet2()}.${randomOctet2()}.${randomOctet2()}.${randomOctet2()}`);
    

}
randomUserIp2();
