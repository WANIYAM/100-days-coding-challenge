/*              QUESTION 137
 Implement a try-catch block to handle potential errors in a block of code.
*/
try {
    // Code that may throw an error
    let result: string = riskyOperation();
    console.log(result);
  } catch (error) {
    console.error('An error occurred:', (error as Error).message);
  }
  
  function riskyOperation(): string {
    // Simulate an error
    throw new Error('This is a risky operation!');
  }
  