// Task 1: Last Loop Value
alert("Task 1: Last Loop Value");
let i = 3;
while (i) {
  alert(i--);
}

// Task 2: Which Values Does the While Loop Show?
alert("Task 2: Which Values Does the While Loop Show?");

// Prefix Form (++i)
alert("Prefix Form (++i):");
i = 0;
while (++i < 5) alert(i);

// Postfix Form (i++)
alert("Postfix Form (i++):");
i = 0;
while (i++ < 5) alert(i);

// Task 3: Which Values Get Shown by the "for" Loop?
alert("Task 3: Which Values Get Shown by the 'for' Loop?");

// Postfix Form
alert("Postfix Form:");
for (let i = 0; i < 5; i++) alert(i);

// Prefix Form
alert("Prefix Form:");
for (let i = 0; i < 5; ++i) alert(i);

// Task 4: Output Even Numbers in the Loop
alert("Task 4: Output Even Numbers in the Loop:");
for (let i = 2; i <= 10; i += 2) {
  alert(i);
}

// Task 5: Replace "for" with "while"
alert("Task 5: Replace 'for' with 'while':");
i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}

// Task 6: Repeat Until the Input is Correct
alert("Task 6: Repeat Until the Input is Correct:");
let num;
do {
  num = prompt("Enter a number greater than 100:", 0);
} while (num <= 100 && num);

// Task 7: Output Prime Numbers
alert("Task 7: Output Prime Numbers:");
let n = 10; // Replace this with any number to get primes up to n
for (let i = 2; i <= n; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) alert(i);
}
