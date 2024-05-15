/*                                QUESTION 63
Shape Shifter: Write a program that can describe either a circle or a
rectangle using a special type alias, including properties unique to each shape.
*/
// Example usage
var circle = { type: 'circle', radius: 5 };
var rectangle = { type: 'rectangle', width: 4, height: 6 };
// Describe circle
console.log("This is a circle with radius ".concat(circle.radius, "."));
console.log("Area: ".concat(Math.PI * Math.pow(circle.radius, 2)));
// Describe rectangle
console.log("This is a rectangle with width ".concat(rectangle.width, " and height ").concat(rectangle.height, "."));
console.log("Area: ".concat(rectangle.width * rectangle.height));
