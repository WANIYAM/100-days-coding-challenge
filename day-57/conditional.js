// // 1. "if" statement:
// let year = prompt('In which year was ECMAScript-2015 specification published?', '');
// if (year == 2015) {
//   alert( 'You are right!' );
// }

// // 2. Boolean Conversion:
// // The expression inside the if statement is evaluated and converted to a boolean.
// // Values like 0, empty string, null, undefined, and NaN are considered falsy, while others are considered truthy.

// // 3. "else" Clause:
// let year = prompt('In which year was the ECMAScript-2015 specification published?', '');
// if (year == 2015) {
//   alert( 'You guessed it right!' );
// } else {
//   alert( 'How can you be so wrong?' ); // any value except 2015
// }

// // 4. "else if" Clause:
// let year = prompt('In which year was the ECMAScript-2015 specification published?', '');
// if (year < 2015) {
//   alert( 'Too early...' );
// } else if (year > 2015) {
//   alert( 'Too late' );
// } else {
//   alert( 'Exactly!' );
// }

// // 5. Conditional Operator `?`:
// let accessAllowed;
// let age = prompt('How old are you?', '');
// accessAllowed = (age > 18) ? true : false;
// alert(accessAllowed);

// // 6. Multiple `?` Operators:
// let age = prompt('age?', 18);
// let message = (age < 3) ? 'Hi, baby!' :
//   (age < 18) ? 'Hello!' :
//   (age < 100) ? 'Greetings!' :
//   'What an unusual age!';
// alert( message );

// // 7. Non-traditional Use of `?`:
// let company = prompt('Which company created JavaScript?', '');
// (company == 'Netscape') ?
//    alert('Right!') : alert('Wrong.');

// Tasks:

// 1. if (a string with zero):
if ("0") {
 console.log( 'Hello' );
}

// 2. The name of JavaScript:
let answer = prompt('What is the “official” name of JavaScript?');
(answer == 'ECMAScript') ? alert('Right!') : alert('You don’t know? ECMAScript!');

// 3. Show the sign:
let number = prompt('Enter a number:');
let sign = (number > 0) ? 1 : (number < 0) ? -1 : 0;
alert(sign);

// 4. Rewrite 'if' into '?':
let result = (a + b < 4) ? 'Below' : 'Over';

// 5. Rewrite 'if..else' into '?':
let login = prompt('Login:');
let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' : '';
