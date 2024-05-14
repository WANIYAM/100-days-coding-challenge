/*                   QUESTION 59
Add a Special Number: Make a program that creates custom adders.
 These adders can add a specific number to any other number you give them later.
*/

function createAdder(value: number): (arg0: number) => number {
    return function(number: number): number {
      return number + value;
    };
  }
  
  const adder5 = createAdder(5); // Adder that adds 5
  const adder10 = createAdder(10); // Adder that adds 10
  
  const result1 = adder5(12); // result1 will be 17 (12 + 5)
  const result2 = adder10(20); // result2 will be 30 (20 + 10)
  
  console.log(result1); // 17
  console.log(result2); // 30
  