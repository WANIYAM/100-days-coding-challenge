/*                          QUESTION NO 57
Find the Average Grade: Given a list of grades, calculate the average grade.
*/

//  List of grades
let grades = [85, 90, 75, 92, 88];

// Calculate the total sum of grades
let total = 0;
for (const grade of grades) {
    total += grade;
};
// Calculate the average grade
let average_grade = (total) / (grades.length)

console.log("Grades:", grades)
console.log("Average Grade:", average_grade)
