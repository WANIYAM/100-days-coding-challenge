/*                           QUESTION 145
Create a function that accepts a callback and invokes it with some arguments.
*/
// Function that accepts a callback and invokes it with arguments
function performOperation(callback) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    // Invoking the callback with the provided arguments
    callback.apply(void 0, args);
}
// Example callback function
function displayMessage(message) {
    console.log(message);
}
// Using the performOperation function with the callback
performOperation(displayMessage, "Hello, this is a callback function!");
