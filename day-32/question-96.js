/*                            QUESTION 96
Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
*/
var number = [1, 2, 3, 4, 5];
var sum = number.reduce(function (accumulator, currentValue) { return accumulator + currentValue; }, 0);
console.log(sum);
