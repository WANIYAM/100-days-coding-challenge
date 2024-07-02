// Type Assertions in TypeScript
// Type assertions in TypeScript are a way to explicitly inform the TypeScript compiler about the expected type of a value, even when the compiler cannot determine it with certainty. They are useful when you, as a developer, have more knowledge about the data types than TypeScript can infer, especially in scenarios where you're working with non-TypeScript code or dynamically retrieved data.
// Example 1: Using type assertions with a string
var data1 = "1000"; // Ensure the initial value is a string
// Type assertion to treat "data1" as a string
console.log(data1.repeat(3)); // This should work correctly
// Explanation:
// 1. In the first example, we have a variable `data1` of type `any`, which is initially assigned a string value. We perform a type assertion `(data1 as string)` to treat `data1` as a string. The `repeat` method works correctly on the string value.
// 2. In the second example, we have a variable `data2` of type `any`, which is initially assigned a numeric value. We perform a type assertion `(data2 as number)` to treat `data2` as a number. The `toFixed` method works correctly on the numeric value.
