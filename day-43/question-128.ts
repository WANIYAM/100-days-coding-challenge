/*                          QUESTION 128
Create an arrow function that takes multiple parameters and returns the product of all parameters.
*/

const product = (...numbers) => numbers.reduce((acc, current) => acc * current, 1);
console.log(product(1, 2, 3, 4, 5)); 