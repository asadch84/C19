//🚀 Day 19 Challenge: Start Coding! 🚀
//Question 55: Double Numbers in an Array:
// Original list of numbers
var numbers = [1, 2, 3, 4, 5];
// Function to double numbers in an array
var doubleNumbers = numbers.map(function (number) { return number * 2; });
// Print the doubled numbers array
console.log(doubleNumbers);
/* Question 56: Keep Only Strings: Given a mix of different types of items,
make a new list that has only the words.*/
// Original mixed array
var mixedItems = [1, 'apple', true, 'banana', 42, 'orange', false, 'grape'];
//  keep only strings from the array
var stringsArray = mixedItems.filter(function (item) { return typeof item === 'string'; });
// Print the array containing only strings
console.log(stringsArray);
/* Question 57: Find the Average Grade: Given a list of grades,
 calculate the average grade.*/
// List of grades
var grades = [85, 90, 75, 95, 88];
//  calculate the average grade
var averageGrade = grades.reduce(function (total, grade) { return total + grade; }, 0) / grades.length;
// Print the average grade
console.log("Average Grade:", averageGrade);
