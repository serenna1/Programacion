//FUNCIONES DE ORDEN SUPERIOR 

/**** ABSTRACCION  ****/
function sumarRango(min,max){
      let total = 0; 
      for (let i = min; i <= max; i ++){
        total += i;
      }
      return total;
}
console.log (sumarRango(1,10));
console.log (sumarRango(3,7));
console.log (sumarRango(2,4));


/****  RETORNO DE FUNCIONES  ****/
function MayorQue(x){
    return (num) => num > x; // num va  a ser true si es mayor que x, de lo contrario va a ser false 
}
const MayorQueDiez = MayorQue(10);
const MayorQueVeinte = MayorQue(20);
console.log(MayorQueDiez(9));//false
console.log(MayorQueDiez(11));//true 

/**** METODO DE BUSQUEDA Y TRASFORMACION ****/ // DE ARRAYS 

const numeros = [50,32,12,25,6];
const animales = ["Perro", "Gato", "Tortuga", "Pez"];
const productos =[
    {nombre: "Mesa", precio: 3500},
    {nombre: "Silla", precio: 2000},
    {nombre: "Ventana", precio:4500},
    {nombre: "Puerta", precio: 4500},
];
//.forEach => Recorre el Array y ejecuta lo que le digamos con cada elemento.
productos.forEach((producto)=>{
    console.log(producto)
});

// find() => Recoorre el Array y retorna el primer elemento que cumpla con una condicion
//si hay dos elementos con el mismo nombre nos devolveria solo el primero 
const perro = animales.find((animal) => animal === "Perro");
console.log(perro);
/*
let productorElegido = prompt("Ingrese el producto que quiere comprar: ");
console,log(productos.find((producto) => producto.nombre === productorElegido));
*/
//filter() => recoorrer el Array retorna uno nuevo con todos los elementos que cumplan con la condicion 
//si hay dos elementos con el mismo nombre nos va a tirar todo y nos va a decolver un array 
 
const gato = animales.filter((animal)=> animal === "Gato");
console.log(gato);

const silla = productos.filter((producto)=> producto.nombre === "Silla");
console.log(silla);

//some() => recoorer el Array y responde con true or false segun si se encuentra o no  un elemento que cumpla con una condicion.
const cisne = animales.some((animal) => animal === "Cisne");
console.log(cisne);

const tortuga = animales.some((animal) => animal === "Tortuga");
console.log(tortuga);

//map() => Recorre el Array y retorna uno nuevo con los elementos trasformados del Array original.
//sirve para abstraer todos los nombres de nuestros objetos en un nuevo array
const nombres = productos.map((producto)=>producto.nombre )
console.log(nombres);
const preciosActualizados = productos.map((producto) =>{
    return{
        nombre: producto.nombre,
        precio: producto.precio * 1.5
    }
});
console.log(preciosActualizados);

//reduce() => Recorrer el Array y retornar un unico valor tars hacer una operacion sobre los elementos
const toutal = numeros.reduce((acumulador, numero)=> acumulador + numero, 0 );
console.log(toutal);

const totalCarrito = productos.reduce((acumulador, producto)=> acumulador + producto.precio, 0);
console.log(totalCarrito);

//sort() => Recorre el Array segun el criterio que le indiquemos 
numeros.sort((a,b) => a - b); //ordena de manor a mayor a+b seria de mayor a menor
console.log(numeros);//es importante saber que este metodo es dedstructivo trasforma y modifica nuestro array original el resto del programa 

//Con .splice() no solo se puede eliminar elementos del array,
//  si no que también podemos extraerlos guardándolo en un nuevo array.
//  ¡Ojo! que al hacer esto estaríamos modificando el array de origen.
let vegetales = ["Repollo", "Nabo", "Rábano", "Zanahoria"];
console.log(vegetales);
// ["Repollo", "Nabo", "Rábano", "Zanahoria"]

let pos = 1,
  numElementos = 2;

let elementosEliminados = vegetales.splice(pos, numElementos);
// ["Nabo", "Rábano"] ==> Lo que se ha guardado en "elementosEliminados"

console.log(vegetales);
// ["Repollo", "Zanahoria"] ==> Lo que actualmente tiene "vegetales"
let copiaArray = vegetales.slice();
// ["Repollo", "Zanahoria"]; ==> Copiado en "copiaArray"

/****MATH ****/

const decimal1 = 1.25;
const decimal2 = 1.75;

//min() => Retorna el numero minimo de un listado
console.log(Math.min(50,12,37,17,25,6));
//max() => Retorna el numero maximo de un listado
console.log(Math.max(50,12,37,17,25,6));
 
//ceil()=> Retorna el numero  entero  que le indiquemos redondeado hacia arriba 
console.log(Math.ceil(decimal1)); //2

//floor()=> Retorna el numero  entero  que le indiquemos redondeado hacia abajo 
console.log(Math.floor(decimal1)); //1

//round()=> Retorna el numero  entero  que le indiquemos redondeado mas cercano 
console.log(Math.round(decimal1)); //1
console.log(Math.round(decimal2)); //2

// random() => Retorna un numero aleatorio entre 0 inclusive y 1 inclusive
console.log(Math.random());
console.log(Math.round(Math.random()));
console.log(Math.round(Math.random() * 50 + 20 )); // desde 20, 50 numeros mas hacia arriba 
console.log(Math.floor(Math.random()*3 + 1))// numero random entre 1 y 3