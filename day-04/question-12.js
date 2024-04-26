/*                   QUESTION 12
Greetings: Start with the array you used in Exercise 11,
 but instead of just printing each person’s name, print a message to them.
 The text of each message should be the same, but each message should be
 personalized with the person’s name.
 */
var Names = ["Ali", "Sara", "Waniya", "Saba"];
// Print a personalized message to each person
for (var i = 0; i < Names.length; i++)
    console.log("Hello ".concat(Names[i], ", I hope you're having a great day!"));
// console.log(`Hello ${Names[0]}, I hope you're having a great day!`);
// console.log(`Hello ${Names[1]}, I hope you're having a great day!`);
// console.log(`Hello ${Names[2]}, I hope you're having a great day!`);
// console.log(`Hello ${Names[3]}, I hope you're having a great day!`);
