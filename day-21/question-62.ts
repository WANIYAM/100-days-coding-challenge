/*                                 QUESTION 62
Making a Student Template: Create a blueprint for student information, including their name,
 age, and the classes they're taking, and then fill in this blueprint with an example student.
*/

interface Student {
    name: string;
    age: number;
    classes: string[];
}

// Example student:
let myStudent: Student = {
    name: "Waniya Mustafa",
    age: 23,
    classes: ["Math", "Science", "English"]
};

console.log(myStudent);
