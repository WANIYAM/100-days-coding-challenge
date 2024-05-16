/*                                          QUESTION 66
Logical AND Verification: Create a function that checks two boolean (true or false) values.
 It should only say true if both are true, using the && operator. For instance, 
 checkBothTrue(true, false) should be false.
*/

function checkBothTrue(value1: boolean, value2: boolean): boolean {
    return value1 && value2;
}
let value1: boolean = true;
let value2: boolean = false;
let Result: boolean = checkBothTrue(value1, value2);
console.log(Result);  
