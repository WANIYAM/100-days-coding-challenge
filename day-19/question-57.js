/*                          QUESTION NO 57
Find the Average Grade: Given a list of grades, calculate the average grade.
*/
//  List of grades
var grades = [85, 90, 75, 92, 88];
// Calculate the total sum of grades
var total = 0;
for (var _i = 0, grades_1 = grades; _i < grades_1.length; _i++) {
    var grade = grades_1[_i];
    total += grade;
}
;
// Calculate the average grade
var average_grade = (total) / (grades.length);
console.log("Grades:", grades);
console.log("Average Grade:", average_grade);
