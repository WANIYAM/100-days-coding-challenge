/*                   QUESTION 139
 List three reserved words in JavaScript and create a valid use case for each.
*/

//1. let

/* let is a reserved word in JavaScript that is used to declare a
variable with block scope.
*/

if (true) {
    let x = 10;
    console.log(x); // 10
  }
//   console.log(x); // undefined

//2. this

/*this is a reserved word in JavaScript that refers to the current 
execution context of a function or script.
*/  
  const person = {
    name: 'John',
    sayHello: function() {
      console.log(`Hello, my name is ${this.name}!`);
    }
  };
  
  person.sayHello(); // Hello, my name is John!

//3. typeof

/*typeof is a reserved word in JavaScript that is used to 
determine the data type of a value.
*/
let x = 10;
if (typeof x === 'number') {
  console.log('x is a number!');
} else {
  console.log('x is not a number!');
}
// Output: x is a number!