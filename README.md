# 10 funciones de lodash que te pueden ayudar

Documentación oficial: [Lodash](https://lodash.com/docs/4.17.15)

## Introducción
Lodash es una biblioteca de JavaScript que proporciona una amplia variedad de funciones de utilidad para tareas de programación comunes, facilitando la manipulación de arrays, objetos, cadenas, y otros tipos de datos. Lodash está diseñado siguiendo el paradigma de la programación funcional, lo que permite escribir código más limpio, modular y mantenible.

## UniqBy
Crea una matriz sin duplicados, permitiéndote especificar un criterio para determinar la unicidad de los elementos. Es especialmente útil para eliminar duplicados en arrays de objetos basados en una propiedad específica.

```javascript
const _ = require('lodash');

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'Alice' },
  { id: 3, name: 'Charlie' },
  { id: 2, name: 'Bob' }
];

const uniqueUsers = _.uniqBy(users, 'id');
console.log(uniqueUsers);
// [ { id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' } ]
```

## merge
se utiliza para combinar múltiples objetos en uno solo, manejando la fusión de propiedades de manera profunda y recursiva.

```Javascript
_.merge(object, [sources])
```

```Javascript
const object = {
  'a': [{ 'b': 2 }, { 'd': 4 }]
};
 
const other = {
  'a': [{ 'c': 3 }, { 'e': 5 }]
};
 
_.merge(object, other);
// { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
```

## isEqual
Se utiliza para comparar dos valores y determinar si son equivalentes en estructura y valor. Esta función es especialmente útil cuando necesitas comparar objetos complejos, ya que === en JavaScript solo compara la igualdad de referencia para objetos y no profundiza en la comparación de las propiedades de los objetos.

```Javascript
const object = { 'a': 1 };
const other = { 'a': 1 };
 
_.isEqual(object, other); // true
 
object === other; // false
```

## omit
Se utiliza para crear un nuevo objeto omitiendo las propiedades especificadas. Es especialmente útil cuando quieres crear una versión filtrada de un objeto sin ciertas propiedades.

```Javascript
const object = { 'a': 1, 'b': '2', 'c': 3 };
 
_.omit(object, ['a', 'c']); // { 'b': '2' }
```

## pick
Se utiliza para crear un nuevo objeto seleccionando solo las propiedades especificadas.

```Javascript
const object = { 'a': 1, 'b': '2', 'c': 3 };
 
_.pick(object, ['a', 'c']); // { 'a': 1, 'c': 3 }
```

## sortBy
Se utiliza para ordenar una colección basada en los valores de una propiedad específica o un criterio definido.

```Javascript
const users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 34 }
];

_.sortBy(users, ['user', 'age']); // objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
```

## shuffle
Se utiliza para mezclar aleatoriamente los elementos de una colección, como un arreglo. 

```Javascript
_.shuffle([1, 2, 3, 4]); // [4, 1, 3, 2]
```

## Manipulación de strings
Proporciona una serie de métodos útiles para manipular cadenas de texto, incluyendo la conversión entre diferentes estilos de escritura como camelCase, kebab-case (kebabCase), snake_case (snakeCase), entre otros. 

### camelCase

```javascript
const myString = 'hello_world';
const camelCaseString = _.camelCase(myString);

console.log(camelCaseString); // helloWorld
```

### kebabCase

```javascript
const myString = 'HelloWorld';
const kebabCaseString = _.kebabCase(myString);

console.log(kebabCaseString); // hello-world
```

### snakeCase

```javascript
const myString = 'HelloWorld';
const snakeCaseString = _.snakeCase(myString);

console.log(snakeCaseString); // hello_world
```