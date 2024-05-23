/*                                 QUESTION 86
Checking for Text Presence: Create a function that checks if the word "JavaScript" is
 present in a given string. It should return true if found, otherwise false.
*/
function isJavaScriptPresent(input) {
    return input.includes("JavaScript");
}
console.log(isJavaScriptPresent("I love JavaScript"));
console.log(isJavaScriptPresent("TypeScript is a superset of JS"));
