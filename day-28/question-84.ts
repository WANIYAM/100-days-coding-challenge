/*                                      QUESTION 84
Replacing Text in a String: Write a function that takes a sentence and replaces all instances 
of the word "JavaScript" with "TypeScript".
*/

function replaceJavaScript(s: string): string {
    return s.replace(/JavaScript/g, "TypeScript");
}

// Example usage:
console.log(replaceJavaScript("I love JavaScript! JavaScript is great!"));
