
// Con Lodash
const articles = [
    { id: 1, title: 'Entendiendo los Closures en JavaScript' },
    { id: 2, title: 'Una Guía de CSS Flexbox' },
    { id: 1, title: 'Entendiendo los Closures en JavaScript' },
    { id: 3, title: 'Introducción a React' },
    { id: 2, title: 'Una Guía de CSS Flexbox' }
];

console.log({articles});
const uniqueArticles = _.uniqBy(articles, 'id');
console.log({uniqueArticles});

// Sin Lodash

// Usando Set
const obj1 = { id: 1, name: 'Alice' };
const obj2 = { id: 2, name: 'Bob' };
const obj3 = { id: 1, name: 'Alice' }; // Mismo contenido que obj1 pero diferente referencia

// Crear un Set con objetos
let mySet = new Set();

mySet.add(obj1);
mySet.add(obj2);
mySet.add(obj3); // Este objeto no se agregará porque obj1 ya está presente (diferente referencia pero mismo contenido)

console.log({mySet});

/** 
 * Si estás utilizando un Set en JavaScript y deseas eliminar objetos duplicados 
 * basados en un criterio específico como el id, pero permitiendo diferencias en 
 * otras propiedades como name, debes implementar una lógica personalizada en la 
 * comparación de objetos. Esto se debe a que por defecto, el Set compara objetos 
 * por referencia, no por el contenido de sus propiedades.
 */
const uniqueBy = (array, key) => {
    const seen = new Set();
    return array.filter(item => {
        const val = item[key];
        if (seen.has(val)) {
            return false;
        } else {
            seen.add(val);
            return true;
        }
    });
};

const uniqueArticles2 = uniqueBy(articles, 'id');
console.log({uniqueArticles2});
