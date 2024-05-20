/*                                         QUESTION 77
Default Parameters: Write a function that greets a user. It should take
the user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.
*/
// Function with a default parameter
function greetUser(name) {
    if (name === void 0) { name = 'Anonymous'; }
    console.log("Hello, ".concat(name, "!"));
}
// Calling the function with and without a parameter
greetUser('Waniya');
greetUser();
