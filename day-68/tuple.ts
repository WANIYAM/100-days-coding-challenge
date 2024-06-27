// Defining a tuple type
let article: readonly [number, string, boolean] = [11, "Title One", true];

// Trying to push a new element into a tuple (will result in an error)
// article.push(100); // Error: Property 'push' does not exist on type 'readonly [number, string, boolean]'

console.log(article);

// Destructuring the tuple into individual variables
const [id, title, published] = article;
console.log(id);
console.log(title);
console.log(published);
