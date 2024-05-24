/*                                     QUESTION 88 
Converting Strings to Numbers: Write a function that takes a string representation of a 
number (e.g., "123") and converts it into an actual number type.
*/

function stringToNumber(str: string): number {
    return Number(str);
}

console.log(stringToNumber("123")); 
console.log(stringToNumber("45.67")); 
console.log(stringToNumber("abc")); 

