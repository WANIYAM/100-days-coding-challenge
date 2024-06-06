"use strict";
/*                            QUESTION 130
 Explain how to export a function from one JavaScript file and
  import it into another file.
*/
Object.defineProperty(exports, "__esModule", { value: true });
// Import the named export
const math_1 = require("./math");
console.log((0, math_1.add)(2, 3));
