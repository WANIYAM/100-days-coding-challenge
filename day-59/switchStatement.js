// Task 1: Rewrite the "switch" into an "if"

// Original switch statement
/*
switch (browser) {
  case 'Edge':
    alert("You've got the Edge!");
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert('Okay we support these browsers too');
    break;

  default:
    alert('We hope that this page looks ok!');
}
*/

// Equivalent if..else if..else statements
function checkBrowser(browser) {
    if (browser === 'Edge') {
      alert("You've got the Edge!");
    } else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
      alert('Okay we support these browsers too');
    } else {
      alert('We hope that this page looks ok!');
    }
  }
  
  // Example usage of checkBrowser function
  let browser = prompt("Which browser are you using?");
  checkBrowser(browser);
  
  
  // Task 2: Rewrite "if" into "switch"
  
  // Original if..else statements
  /*
  let a = +prompt('a?', '');
  
  if (a == 0) {
    alert(0);
  }
  if (a == 1) {
    alert(1);
  }
  
  if (a == 2 || a == 3) {
    alert('2,3');
  }
  */
  
  // Equivalent switch statement
  function checkNumber() {
    let a = +prompt('a?', '');
  
    switch (a) {
      case 0:
        alert(0);
        break;
      case 1:
        alert(1);
        break;
      case 2:
      case 3:
        alert('2,3');
        break;
      default:
        // No action needed for other values
        break;
    }
  }
  
  // Example usage of checkNumber function
  checkNumber();
  