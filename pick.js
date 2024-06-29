// Con Lodash
const user = {
    id: 1,
    name: 'Alice',
    age: 30,
    email: 'alice@example.com'
};

const pickedUser = _.pick(user, ['name', 'age']);
console.log({pickedUser})

// Sin Lodash
const pick = (obj, keys) => {
    let newObj = {};
    keys.forEach(key => {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key];
        }
    });
    return newObj;
}

const pickedUser2 = pick(user, ['name', 'age']);
console.log(pickedUser2);