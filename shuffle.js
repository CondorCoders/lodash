// Con Lodash

// Definir un arreglo de cartas
const deck = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

// Mezclar el mazo de cartas usando Lodash
const shuffledDeck = _.shuffle(deck);

console.log('Mazo original:', deck);
console.log('Mazo mezclado:', shuffledDeck);

// Sin Lodash
const shuffledDeck2 = deck.sort(() => Math.random() - 0.5);
console.log('Mazo mezclado sin lodash:', shuffledDeck2);