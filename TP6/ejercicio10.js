//ejercicio 10: 

/*
Llame a su función isEmpty, toma un parámetro y verifica si está vacío o no
*/
function isEmpty(algo){
    
    if (algo === "" || algo === 0 || algo === false ){
        console.log(`su arguemto esta vacio (cadena vacía/cero/false)`);
        return;
    }
    if (Array.isArray(algo) && algo.length === 0 ){
        console.log(`su arguemto esta vacio (array vacío)`)
        return; 
    }
    if (algo === null || algo === undefined||algo !== algo ){
        console.log(`su arguemtno esta vacio (null/undefined/NaN) `)
        return;
    }else{
        console.log(`su argumento no esta vacio`)
        return;
    }

}
isEmpty(`  `);//teoricamente tiene carcaters por ende no esta vacio 
isEmpty(``);
isEmpty(`aa`);
isEmpty([]);
isEmpty([1,2,3]);
isEmpty();
isEmpty(6);

//if para objetos sacado de ia 
/*
 if (typeof algo === 'object') {
        let tienePropiedades = false;
        for (let prop in algo) {
            tienePropiedades = true;
            break;
        }
        if (!tienePropiedades) {
            console.log("Está vacío (objeto vacío)");
            return;
        }
*/