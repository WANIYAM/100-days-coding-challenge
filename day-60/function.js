// Task: Is "else" required?
alert ("Task: Is 'else' required?")
// Original function
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you?');
    }
  }
  
  // Function without "else"
  function checkAgeWithoutElse(age) {
    if (age > 18) {
      return true;
    }
    return confirm('Did parents allow you?');
  }
  
  alert("Both functions will behave the same way")
  
  
  // Task: Rewrite the function using '?' or '||'
  
  alert("Task: Rewrite the function using '?' or '||'")
  // Using the question mark operator '?'
  function checkAgeTernary(age) {
    return age > 18 ? true : confirm('Did parents allow you?');
  }
  
  // Using the OR '||' operator
  function checkAgeOr(age) {
    return age > 18 || confirm('Did parents allow you?');
  }
  alert("Both functions will behave the same way")
  
  // Task: Function min(a, b)

  alert("Task: Function min(a, b)")
  
  function min(a, b) {
    return a < b ? a : b;
  }

  alert(min(4,5))
  
  // Task: Function pow(x, n)

  alert("Task: Function pow(x, n)")
  
  function pow(x, n) {
    if (n < 1) {
      return NaN; // or you could throw an error
    }
  
    let result = 1;
    for (let i = 0; i < n; i++) {
      result *= x;
    }
    return result;
  }

  
  // Prompt for x and n, then show the result of pow(x, n)
  
  let x = parseFloat(prompt("Enter the base number (x):"));
  let n = parseInt(prompt("Enter the exponent (n):"), 10);
  
  if (isNaN(x) || isNaN(n) || n < 1) {
    alert("Please enter valid numbers. The exponent (n) must be a natural number (integer greater than or equal to 1).");
  } else {
    let result = pow(x, n);
    alert(`${x} raised to the power of ${n} is ${result}`);
  }


  