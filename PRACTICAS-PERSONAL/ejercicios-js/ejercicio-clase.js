/*
📝 Ejercicio: Clase Fruta
-Crea una clase llamada Fruta. La clase debe tener estas propiedades:
nombre → el nombre de la fruta
color → el color de la fruta
cantidad → cuántas frutas hay

-La clase debe tener estos métodos:
mostrarInfo() → que muestre en consola: "La fruta [nombre] es de color [color] y hay [cantidad] unidades."
agregar(n) → que aumente la cantidad de frutas en n unidades
quitar(n) → que disminuya la cantidad de frutas en n unidades

-Crea al menos dos objetos a partir de la clase Fruta con datos distintos.

-Llama a los métodos mostrarInfo, agregar y quitar para ver cómo cambian los valores.
-Luego usa los conocimientos de modulo fs para  crear o actualizar un archivo de frutas 

*/
const fs = require ("fs");
class Frutas {
    constructor(nombre,color,cantidad){
        this.nombre = nombre;
        this.color = color;
        this.cantidad = cantidad;
    }
    mostrarinfo(){
        console.log(`la fruta ${this.nombre}, es de color ${this.color} y hay ${this.cantidad} unidades.`);
    }
    agregar(n){
        
       this.cantidad += n;
        console.log(`la fruta ${this.nombre},  ahora hay ${this.cantidad} unidades.`);
    }
    quitar(n){
        
        this.cantidad -= n;
        console.log(`la fruta ${this.nombre},  ahora hay ${this.cantidad} unidades.`);
    }
}

const fruta1 = new Frutas("banana","amarillo",10); 
const fruta2 = new Frutas("higo","verde",5);
const arrayDeFrutas = [fruta1,fruta2];
const textoFrutas = arrayDeFrutas.map(f=>`Nombre: ${f.nombre} Color: ${f.color} Cantidad: ${f.cantidad}` ).join("\n");
/*
fruta1.mostrarinfo();
fruta1.agregar(5);
fruta1.quitar(5);
*/
fs.writeFile("stockfrutas.txt",textoFrutas, (error) =>{
    if (error){
        console.error("Error al escribir el archivo", error);
        return;
    }
    console.log("archivo stockfrutas creado con exito!");
    fs.readFile("stockfrutas.txt","utf8",(error,data)=>{
        if(error){
            console.error("Error al leer el archivo", error);
            return;
        }
        console.log("\nContenido del archivo:");
        console.log(data);
    })
})