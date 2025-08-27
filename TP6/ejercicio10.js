//ejercicio 10: 

/*
Llame a su función isEmpty, toma un parámetro y verifica si está vacío o no
*/
function isEmpty(algo){
    let arrayvacio = [];
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
isEmpty(`  `);
isEmpty(``);
isEmpty(`aa`);
isEmpty([]);
isEmpty([1,2,3]);
isEmpty();
isEmpty(6);