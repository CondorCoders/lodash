// Con Lodash

// camelCase
const camelCaseExample1 = 'hello_world';
const camelCaseExample2 = 'FOO_BAR';
const camelCaseExample3 = 'Some-Text-Here';

console.log("CAMEL CASE")
console.log(_.camelCase(camelCaseExample1));
console.log(_.camelCase(camelCaseExample2));
console.log(_.camelCase(camelCaseExample3));

// kebabCase
const kebabCaseExample1 = 'HelloWorld';
const kebabCaseExample2 = 'FOO_BAR';
const kebabCaseExample3 = 'someTextHere';

console.log("------------")
console.log("KEBAB CASE")
console.log(_.kebabCase(kebabCaseExample1));
console.log(_.kebabCase(kebabCaseExample2));
console.log(_.kebabCase(kebabCaseExample3));

// snakeCase
const snakeCaseExample1 = 'helloWorld';
const snakeCaseExample2 = 'FOO_BAR';
const snakeCaseExample3 = 'Some-Text-Here';

console.log("------------")
console.log("SNAKE CASE")
console.log(_.snakeCase(snakeCaseExample1)); // Output: hello_world
console.log(_.snakeCase(snakeCaseExample2)); // Output: foo_bar
console.log(_.snakeCase(snakeCaseExample3)); // Output: some_text_here