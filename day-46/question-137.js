/*              QUESTION 137
 Implement a try-catch block to handle potential errors in a block of code.
*/
try {
    // Code that may throw an error
    var result = riskyOperation();
    console.log(result);
}
catch (error) {
    console.error('An error occurred:', error.message);
}
function riskyOperation() {
    // Simulate an error
    throw new Error('This is a risky operation!');
}
