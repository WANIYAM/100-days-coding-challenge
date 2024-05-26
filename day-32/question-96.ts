/*                            QUESTION 96
Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
*/

const number = [1, 2, 3, 4, 5];
const sum = number.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); 
