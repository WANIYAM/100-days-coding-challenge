/*                                  QUESTION 64
Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example,
 if provided with "Age: " and 30, it should give back "Age: 30".
*/
function Combine_String_Numbers(text, number) {
    return text + number;
}
;
var text = "Age: ";
var number = 30;
var combineStringNumbers = Combine_String_Numbers(text, number);
console.log(combineStringNumbers);
