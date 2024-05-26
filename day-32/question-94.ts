/*                                     QUESTION 94
Use the .map() method to create a new array that contains the length of
each word from an array of words.
*/

const words = ["apple", "banana", "cherry", "dragonfruit"];

const wordLengths = words.map(function(word) {
  return word.length;
});

console.log(wordLengths); 
