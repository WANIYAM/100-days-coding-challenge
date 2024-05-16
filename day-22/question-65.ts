/*                              QUESTION 65
Determine the Remainder: Make a function that gets two numbers and shows the 
leftover from dividing them using the % sign. For example, remainder(5, 2) should give 1.
*/


function Remainder(num1: number, num2: number): number {
    return num1 % num2;
}

let num1: number = 5;
let num2: number = 2;
let result: number = Remainder(num1, num2);
console.log(result);  
