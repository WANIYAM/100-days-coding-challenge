/*                               QUESTION 87
Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.
*/

function extractFirst10Characters(input: string): string {
    return input.substring(0, 10);
}

// Example usage:
console.log(extractFirst10Characters("1234567890abcdefghij")); 
console.log(extractFirst10Characters("Hello")); 