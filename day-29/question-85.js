/*                                     QUESTION 85
Finding the Position of a Substring: Write a function that locates the first occurrence of
the word "code" within any given string and returns its position.
*/
function findPositionOfCode(input) {
    return input.indexOf("code");
}
console.log(findPositionOfCode("Learn to code with TypeScript"));
console.log(findPositionOfCode("code is fun"));
console.log(findPositionOfCode("Code is fun")); //its has no code so it will show -1
