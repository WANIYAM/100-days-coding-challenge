/*                    QUESTION 106
Determine if a given year is a leap year using comparison operators.
*/

function isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log(isLeapYear(2024));  
console.log(isLeapYear(2023));  
console.log(isLeapYear(1900));  
console.log(isLeapYear(2000));  
