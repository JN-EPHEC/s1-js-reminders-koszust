/**
 * Exercise 1 : String and Array Manipulation
 *
 * How to execute your code ?
 * Write your solution, then run the following command in your terminal:
 *      node exercise1.mjs
 */

// Expected result:
// [ 'Mobile phone', 'Laptop computer', 'Headphones', 'Smartwatch' ]
// Your code here

const users = [
  { id: 1, name: "Alice", age: 28, specialty: "Marketing" },
  { id: 2, name: "Bob", age: 35, specialty: "Engineering" },
  { id: 3, name: "Charlie", age: 22, specialty: "Marketing" },
  { id: 4, name: "David", age: 42, specialty: "Engineering" },
  { id: 5, name: "Eve", age: 29, specialty: "Design" },
];

const userNames = users.map(user => user.name);
console.log(userNames);

const engineers = users.filter(user => user.specialty === "Engineering");
console.log(engineers);

//const averageAge = users.length((sum users.length)/users.length);
//console.log(averageAge);

const userDescriptions = [user.name === A, user.age === B];
console.log(userDescription.join("A" "is" "B" "years old"));