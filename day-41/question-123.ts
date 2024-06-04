/*              QUESTION 123
Create a loop that iterates through a string and stops when it finds the first vowel.
*/
// Create a loop that iterates through a string and stops when it finds the first vowel.
const str: string = "bcdfghjklmnpqrstvwxyzAEIOU";
const vowels: string = "AEIOUaeiou";

for (let char of str) {
    if (vowels.includes(char)) {
        console.log(`First vowel found: ${char}`);
        break;
    }
}
