/*                       QUESTION 108
Compare two strings to check if they are identical, ignoring case sensitivity.
*/
function areStringsEqualIgnoreCase(str1: string, str2: string): boolean {
    return str1.toLowerCase() === str2.toLowerCase();
}


console.log(areStringsEqualIgnoreCase("Hello", "hello")); 
console.log(areStringsEqualIgnoreCase("World", "WORLD")); 
console.log(areStringsEqualIgnoreCase("TypeScript", "JavaScript")); 
console.log(areStringsEqualIgnoreCase("Case", "case")); 