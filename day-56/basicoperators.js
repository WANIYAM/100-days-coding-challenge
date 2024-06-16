// Task: The postfix and prefix forms
let a = 1, b = 1;
let c = ++a; // ?
let d = b++; // ?
console.log("Postfix and prefix forms:");
console.log("c:", c); // Output: 2
console.log("d:", d); // Output: 1

// Task: Assignment result
let e = 2;
let x = 1 + (e *= 2);
console.log("\nAssignment result:");
console.log("e:", e); // Output: 4
console.log("x:", x); // Output: 5

// Task: Type conversions
console.log("\nType conversions:");
console.log("" + 1 + 0);        // "10"
console.log("" - 1 + 0);        // -1
console.log(true + false);      // 1
console.log(6 / "3");           // 2
console.log("2" * "3");         // 6
console.log(4 + 5 + "px");      // "9px"
console.log("$" + 4 + 5);       // "$45"
console.log("4" - 2);           // 2
console.log("4px" - 2);         // NaN
console.log("  -9  " + 5);      // "  -9 5"
console.log("  -9  " - 5);      // -14
console.log(null + 1);          // 1
console.log(undefined + 1);     // NaN
console.log(" \t \n" - 2);      // -2


// Task: Fix the addition

console.log("\nfix the addition:");

const f = process.argv[2];
const g = process.argv[3];

// Add unary + before f and g to convert
//  them into numbers before adding
console.log(+f + +g); 