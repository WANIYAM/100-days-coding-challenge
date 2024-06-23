// Function Declaration
// A Function Declaration is a way to define a function in the main code flow. It is hoisted, meaning it can be used before it is defined.

function sayHi() {
    alert("Hello");
  }
  
  sayHi(); // Works fine because sayHi is hoisted
  
  // Function Expression
  // A Function Expression is created when the execution reaches it. It is not hoisted, so it cannot be used before it is defined.
  
  let sayHiExpression = function() {
    alert("Hello");
  };
  
  sayHiExpression(); // Works fine because sayHi is defined before it is called
  
  // Function as a Value
  // In JavaScript, functions are values and can be assigned to variables, passed as arguments, or returned from other functions.
  
  function sayHiValue() {
    alert("Hello");
  }
  
  let func = sayHiValue;
  func(); // Hello
  sayHiValue(); // Hello
  
  // Callback Functions
  // Functions can be passed as arguments to other functions and called later. These are known as callback functions.
  
  function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  function showOk() {
    alert("You agreed.");
  }
  
  function showCancel() {
    alert("You canceled the execution.");
  }
  
  ask("Do you agree?", showOk, showCancel);
  
  // Using Function Expressions as callbacks:
  ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
  );
  
  // Function Declaration vs Function Expression
  // Key differences:
  // Hoisting: Function Declarations are hoisted, Function Expressions are not.
  // Block Scope: In strict mode, Function Declarations are block-scoped.
  
  function sayHiHoisted(name) {
    alert(`Hello, ${name}`);
  }
  
  sayHiHoisted("John"); // Works because sayHi is hoisted
  
  // Example of block scope:
  
  let age = prompt("What is your age?", 18);
  
  if (age < 18) {
    function welcome() {
      alert("Hello!");
    }
  } else {
    function welcome() {
      alert("Greetings!");
    }
  }
  
  // welcome(); // Error: welcome is not defined
  
  // Correct way using Function Expressions:
  let ageExpr = prompt("What is your age?", 18);
  
  let welcome;
  
  if (ageExpr < 18) {
    welcome = function() {
      alert("Hello!");
    };
  } else {
    welcome = function() {
      alert("Greetings!");
    };
  }
  
  welcome(); // Works fine
  
  // Simplified using the ternary operator:
  let ageTernary = prompt("What is your age?", 18);
  
  let welcomeTernary = (ageTernary < 18) ?
    function() { alert("Hello!"); } :
    function() { alert("Greetings!"); };
  
  welcomeTernary(); // Works fine
  
  // Summary
  // - Function Declaration: Useful when the function needs to be called before it is defined. It is hoisted and block-scoped.
  // - Function Expression: Useful when defining functions conditionally or as part of expressions. It is not hoisted and is created at runtime.
  