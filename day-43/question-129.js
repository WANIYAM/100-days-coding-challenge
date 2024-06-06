/*                     QUESTION 129
Explain how this behaves differently in arrow functions compared to traditional functions.
*/
//TRADITIONAL FUNCTION
function traditionalFunction(p0, p1, p2, p3, p4) {
    console.log(arguments); // [1, 2, 3, 4, 5]
    // TypeScript doesn't have a native way to reduce the arguments object directly, 
    // so we need to convert it to an array first.
    return Array.from(arguments).reduce(function (acc, current) { return acc * current; }, 1);
}
console.log(traditionalFunction(1, 2, 3, 4, 5));
//ARROW FUNCTION
var arrowFunction = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    console.log(numbers); // [1, 2, 3, 4, 5]
    return numbers.reduce(function (acc, current) { return acc * current; }, 1);
};
console.log(arrowFunction(1, 2, 3, 4, 5));
