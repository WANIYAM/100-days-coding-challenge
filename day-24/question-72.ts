/*                                    QUESTION 72
Block Scope with let and const: Demonstrate block scope by creating a code block with {}
 that uses both let and const.Show how variables declared inside the block are not accessible 
 outside of it.
*/
{
    // Variables declared using let
    let a: number = 10;
    let b: number = 20;

    console.log("Inside block scope:");
    console.log("a:", a); // Output: a: 10
    console.log("b:", b); // Output: b: 20

    // Variables declared using const
    const c: number = 30;
    const d: number = 40;

    console.log("c:", c); // Output: c: 30
    console.log("d:", d); // Output: d: 40
}

// Attempting to access variables declared inside the block scope outside of it
// This will result in TypeScript compilation error

console.log("Outside block scope:");
console.log("a:", a); // Error: Cannot find name 'a'.
console.log("b:", b); // Error: Cannot find name 'b'.
console.log("c:", c); // Error: Cannot find name 'c'.
console.log("d:", d); // Error: Cannot find name 'd'.
