// Con Lodash
const user = {
    id: 1,
    name: 'Alice',
    age: 30,
    email: 'alice@example.com'
};

const filteredUser = _.omit(user, ['age', 'email']);
console.log({filteredUser}); 

// sin Lodash

// Función para omitir propiedades de un objeto
const omit = (obj, keys) => {
    let newObj = {};
    for (let key in obj) {
        if (!keys.includes(key)) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

const filteredUser2 = omit(user, ['age', 'email']);
console.log({filteredUser2})