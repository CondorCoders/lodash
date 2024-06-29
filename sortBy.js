const books = [
    { title: 'Clean Code', author: 'Robert C. Martin', year: 2008, rating: 4.5 },
    { title: 'The Pragmatic Programmer', author: 'Andrew Hunt, David Thomas', year: 1999, rating: 4.7 },
    { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', year: 2008, rating: 4.2 },
    { title: 'Design Patterns: Elements of Reusable Object-Oriented Software', author: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides', year: 1994, rating: 4.6 }
];

console.log({books})

const sortedBooks = _.sortBy(books, ['title', 'year', 'rating']);

console.log('Libros ordenados por título, año y rating:');
console.log(sortedBooks);

// Sin Lodash
const sortByMultipleProperties = (books, props) => {
    /**
     * Un valor negativo si el primer elemento (a) debe venir antes que el segundo elemento (b).
     * Un valor positivo si el segundo elemento (b) debe venir antes que el primer elemento (a).
     * Cero si ambos elementos son iguales y su orden relativo no importa.
    */
    return books.sort((a, b) => {
        for (let prop of props) {
            if (a[prop] < b[prop]) return -1;
            if (a[prop] > b[prop]) return 1;
        }
        return 0;
    });
}

const sortedBooks2 = sortByMultipleProperties(books.slice(), ['title', 'year', 'rating']);
console.log({sortedBooks2})