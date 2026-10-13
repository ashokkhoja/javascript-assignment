// Q=1

// function in JavaScript is a block of code designed to perform a specific task. 
// It can be reused whenever needed by calling the function.

// function greet() {
//     console.log("Hello World");
// }

// greet();

// Q=2

// function greetStudent(name){
//     return `Hello ${name},welcome to codinggita!`
// }
// console.log(greetStudent("Ashok"));
// console.log(greetStudent("ram"))


// Q=3

// Hoisting is a JavaScript behavior in which function declarations can be called before they appear in the code.

// greet(); // Function called before definition

// function greet() {
//     console.log("Hello Ashok!");
// }

// Q=4

// function calculateAverage(a, b, c) {
//     return (a + b + c) / 3;
// }
// console.log(calculateAverage(80,90,70))


// Q=5

// function multiply(x, y) {
//     return x * y;
// }
// console.log(multiply(12, 5));

// Parameters: x and y
// - These are variables in the function definition.
// Arguments: 12 and 5
// - These are the actual values passed when calling multiply(12, 5).


// Q=6

// function isEven(number) {
//     if (number % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isEven(24));
// console.log(isEven(17));


// Q=7

// function findPercentage(obtainedMarks,totalMarks){
//     return (obtainedMarks/totalMarks)*100
// }
// console.log(findPercentage(456,500))


// Q=8

// In JavaScript, if a function does not contain a return statement, it returns undefined by default.

// function greet() {
//     console.log("Hello Ashok");
// }
// let result = greet();
// console.log(result);

// Q=9

// function calculateSimpleInterest(principle,rate,time){
//     return (principle*rate*time)/100
// }
// console.log(calculateSimpleInterest(10000,5,2))

// Q=10

// Function Declaration: Can be called before its definition because it is hoisted.
// Function Expression: When assigned to a variable using const or let, it cannot be called before the variable is initialized.


// function studentMarks(name, marks) {
//     return `Student ${name} has scored ${marks} marks.`;
// }
// console.log(studentMarks("Ashok", 456));
// console.log(studentMarks("ram", 420));