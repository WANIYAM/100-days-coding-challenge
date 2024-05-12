/*                                   Question 55
Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each
 number is twice its original value.
*/

// Original list of numbers
let original_list :number[]= [1, 2, 3, 4, 5]

//  Create a new list where each number is twice its original value
const doubled_list: number[] = [];
for (let i = 0; i < original_list.length; i++) {
    doubled_list[i] = original_list[i] * 2;
}

console.log("Original List:", original_list);
console.log("Doubled List:", doubled_list);
