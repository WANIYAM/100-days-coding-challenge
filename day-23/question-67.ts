/*                                   QUESTION 67
Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a 
string that represents a number (e.g., "5"). Return their sum as a number.
*/

function addNumberAndString(num: number, str: string): number {
    // Convert the string to a number
    const strAsNumber = parseFloat(str);
    return num + strAsNumber;
}

// Example usage:
const result = addNumberAndString(10, "5");
console.log(result); 
