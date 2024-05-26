/*                                   QUESTION 95
Write a function that uses the .filter() method to return an array of numbers greater than 10.
*/
var numbers = [5, 12, 8, 130, 44];
var greaterThanTen = numbers.filter(function (number) { return number > 10; });
console.log(greaterThanTen);
