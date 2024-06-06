/*                     QUESTION 129
Explain how this behaves differently in arrow functions compared to traditional functions.
*/

//TRADITIONAL FUNCTION

function traditionalFunction(p0: number, p1: number, p2: number, p3: number, p4: number) {
    console.log(arguments); // [1, 2, 3, 4, 5]
    // TypeScript doesn't have a native way to reduce the arguments object directly, 
    // so we need to convert it to an array first.
    return Array.from(arguments).reduce((acc, current) => acc * current, 1);
  }
  
console.log(traditionalFunction(1, 2, 3, 4, 5)); 

//ARROW FUNCTION

const arrowFunction = (...numbers: number[]) => {
    console.log(numbers); // [1, 2, 3, 4, 5]
    return numbers.reduce((acc, current) => acc * current, 1);
  }
  
  console.log(arrowFunction(1, 2, 3, 4, 5)); 
  
  