// Con Lodash
const obj1 = {
    name: 'Alice',
    age: 30,
    address: {
        city: 'New York',
        postalCode: '10001'
    },
    hobbies: ['Reading', 'Traveling']
};

const obj2 = {
    name: 'Alice',
    age: 30,
    address: {
        city: 'New York',
        postalCode: '10001'
    },
    hobbies: ['Reading', 'Traveling']
};

const obj3 = {
    name: 'Bob',
    age: 25,
    address: {
        city: 'Los Angeles',
        postalCode: '90001'
    },
    hobbies: ['Sports', 'Cooking']
};


// Usando _.isEqual de Lodash para comparar objetos
console.log(_.isEqual(obj1, obj2)); 
// Comparación con objeto diferente
console.log(_.isEqual(obj1, obj3));

// Sin Lodash

// Usando === para comparar objetos
console.log(obj1 === obj2); // Output: false (comparación por referencia)
