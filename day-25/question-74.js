/*                                    QUESTION 74
Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5
and b = 10, then swap their values so that a becomes 10 and b becomes 5.
*/
var _a;
var a = 5;
var b = 10;
_a = [b, a], a = _a[0], b = _a[1];
console.log("a: ".concat(a, ", b: ").concat(b)); // Output: a: 10, b: 5
