/*                          QUESTION 128
Create an arrow function that takes multiple parameters and returns the product of all parameters.
*/
var product = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (acc, current) { return acc * current; }, 1);
};
console.log(product(1, 2, 3, 4, 5));
