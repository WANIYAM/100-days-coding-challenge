/*                           QUESTION 145
Create a function that accepts a callback and invokes it with some arguments.
*/

// Function that accepts a callback and invokes it with arguments
function performOperation(callback, ...args) {
    // Invoking the callback with the provided arguments
    callback(...args);
}

// Example callback function
function displayMessage(message) {
    console.log(message);
}

// Using the performOperation function with the callback
performOperation(displayMessage, "Hello, this is a callback function!");
