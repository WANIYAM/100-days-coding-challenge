/*                                   QUESTION 82
Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, 
then to lowercase, and logs both.
*/
function convertCase(s: string) {
    const upperCase = s.toUpperCase();
    const lowerCase = s.toLowerCase();
    console.log("Uppercase:", upperCase);
    console.log("Lowercase:", lowerCase);
}
convertCase("Hello, World!");
