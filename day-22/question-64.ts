/*                                  QUESTION 64
Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example,
 if provided with "Age: " and 30, it should give back "Age: 30". 
*/
function Combine_String_Numbers(text:string,number:number):string{
    return text+number
};

let text:string = "Age: ";
let number:number = 30;
let combineStringNumbers:string = Combine_String_Numbers(text,number);
console.log(combineStringNumbers);
