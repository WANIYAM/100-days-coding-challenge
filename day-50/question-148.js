/*                               QUESTION 148
Demonstrate the use of the setTimeout() function to execute code after a delay.
*/
function displayMessage(message) {
    console.log(message);
}
// Simulate a delay of 2 seconds before displaying the message
setTimeout(displayMessage, 2000, "Hello, World!");
console.log("This message will be displayed immediately.");
