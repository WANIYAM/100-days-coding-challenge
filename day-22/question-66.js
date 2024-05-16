/*                                          QUESTION 66
Logical AND Verification: Create a function that checks two boolean (true or false) values.
 It should only say true if both are true, using the && operator. For instance,
 checkBothTrue(true, false) should be false.
*/
function checkBothTrue(value1, value2) {
    return value1 && value2;
}
var value1 = true;
var value2 = false;
var Result = checkBothTrue(value1, value2);
console.log(Result);
