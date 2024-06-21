//                                      LOGICAL OPERATORS


// Task 1: What's the result of OR?
alert(null || 2 || undefined); // 2

// Task 2: What's the result of OR'ed alerts?
alert(alert(1) || 2 || alert(3)); // 1, then 2

// Task 3: What is the result of AND?
alert(1 && null && 2); // null

// Task 4: What is the result of AND'ed alerts?
alert(alert(1) && alert(2)); // 1, then undefined

// Task 5: The result of OR AND OR
alert(null || 2 && 3 || 4); // 3

// Task 6: Check the range between
let age = prompt("Enter your age:");
if (age >= 14 && age <= 90) {
    alert("Age is between 14 and 90 inclusively.");
} else {
    alert("Age is outside the range 14 to 90.");
}

// Task 7: Check the range outside
// Variant 1: Using NOT !
if (!(age >= 14 && age <= 90)) {
    alert("Age is NOT between 14 and 90 inclusively.");
}

// Variant 2: Without NOT !
if (age < 14 || age > 90) {
    alert("Age is NOT between 14 and 90 inclusively.");
}

// Task 8: A question about "if"
if (-1 || 0) alert('first'); // Runs, -1 is truthy
if (-1 && 0) alert('second'); // Does not run, 0 is falsy
if (null || -1 && 1) alert('third'); // Runs, -1 && 1 is 1 which is truthy

// Task 9: Check the login
let login = prompt("Enter your login:");
if (login === "Admin") {
    let password = prompt("Enter your password:");
    if (password === "TheMaster") {
        alert("Welcome!");
    } else if (password === '' || password === null) {
        alert("Canceled");
    } else {
        alert("Wrong password");
    }
} else if (login === '' || login === null) {
    alert("Canceled");
} else {
    alert("I don’t know you");
}

