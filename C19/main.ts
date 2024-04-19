//🚀 Day 19 Challenge: Start Coding! 🚀

//Question 55: Double Numbers in an Array:
// Original list of numbers
let numbers = [1, 2, 3, 4, 5];

// Function to double numbers in an array
let doubleNumbers=numbers.map(number=>number*2);

// Print the doubled numbers array
console.log(doubleNumbers);


/* Question 56: Keep Only Strings: Given a mix of different types of items, 
make a new list that has only the words.*/

// Original mixed array
let mixedItems = [1, 'apple', true, 'banana', 42, 'orange', false, 'grape'];

//  keep only strings from the array

  let stringsArray = mixedItems.filter(item => typeof item === 'string');
  
// Print the array containing only strings
console.log(stringsArray);

/* Question 57: Find the Average Grade: Given a list of grades,
 calculate the average grade.*/

// List of grades
let grades = [85, 90, 75, 95, 88];

//  calculate the average grade
let averageGrade=grades.reduce((total, grade) =>total+grade,0)/grades.length;
  
// Print the average grade
console.log("Average Grade:", averageGrade);
