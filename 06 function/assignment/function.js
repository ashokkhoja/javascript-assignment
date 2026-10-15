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


// Q=11/

// Local Scope: A variable declared inside a function can be accessed only within that function.

// Global Scope: A variable declared outside a function can be accessed both inside
//  and outside the function, unless shadowed by a local variable.



// function displayAge(){
    
//     let age=20;
//     console.log(age)

// }
// displayAge()
// console.log(age)  error in


// let course="javascript";
// function global(){
//     console.log(course)
// }
// global()


// Q=12

// function analyzeStudent(name, m1, m2, m3) {
//     let total = m1 + m2 + m3;
//     let average = total / 3;

//     return `${name} scored total ${total} with average ${average}`;
// }
// console.log(analyzeStudent("Ashok", 80, 90, 70));



// Q=13


// A function can contain another function.


// function studentReport(name,m1,m2,m3){
//     function total(a,b,c){
//         return  a+b+c
//     }
//      let sum=total(m1,m2,m3)
//     return name +" total marks:"+sum
// }
// console.log(studentReport("ashok",90,85,97))


// Q=14

// function generateReport(name,m1,m2,m3){
    
//    let  total=m1+m2+m3
//    let avg=total/3
//     return total,avg,avg>=40?"pass":"fail"
     
// }
// console.log(generateReport("ashok",9,89,0))


// Q=15

// function sumofthree(a,b,c){
//     return a+b+c
// }
// function averageoftwo(x,y){
//     let total=x+y
//     let avg=total/2
//     return total,avg
// }
// function maxoftwo(a,b){
//     if (a>b){
//         return "a is grater then"
//     }
//     else{
//         return "b is grater then"
//     }
// }
// function fullname(first,last){
//     return first+" "+last
// }

// console.log(sumofthree(1,1,1))
// console.log(averageoftwo(5,5))
// console.log(maxoftwo(9,8))
// console.log(fullname("ashok","khoja"))


// Q=16


//   function calculateGrade(marks) {
//     if (marks >= 90) {
//         return "A+";
//     } else if (marks >= 80) {
//         return "A";
//     } else if (marks >= 70) {
//         return "B";
//     } else if (marks >= 60) {
//         return "C";
//     } else if (marks >= 40) {
//         return "D";
//     } else {
//         return "F";
//     }
// };

// console.log(calculateGrade(95));
// console.log(calculateGrade(82));
// console.log(calculateGrade(67));
// console.log(calculateGrade(45));
// console.log(calculateGrade(32));


// Q=17

// function calculatefinalprice(price,discountpercent){
//     let finalprice=price-(price*discountpercent/100)
//     return finalprice
// }
// console.log(calculatefinalprice(45,10))


// Q=18

// function celsiustofahrenheit(c){
//     return (c*9/5)+32
// }
// function fahrenheittocelsius(f){
//     return (f-32)*5/9
// }
// console.log(celsiustofahrenheit(55))
// console.log(fahrenheittocelsius(55))


// Q=19

// : No, a function expression cannot normally be called before it is defined because function expressions are not hoisted with their function values.

// function calculateTotal(price, quantity) {
//     function multiply() {
//         return price * quantity;
//     }
//     return multiply();
// }
// console.log(calculateTotal(100, 5));


// Q=20

// function processStudent(name, m1, m2, m3) {
//     function calculateMarks() {
//         let total = m1 + m2 + m3;
//         let average = total / 3;
//         return { total, average };
//     }
//     let result = calculateMarks();
//     let status = (m1 >= 33 && m2 >= 33 && m3 >= 33)
//         ? "Pass" : "Fail";
//     return `Name: ${name}
// Total: ${result.total}
// Average: ${result.average.toFixed(2)}
// Result: ${status}
// -------------------`;
// }
// console.log(processStudent("Rahul", 80, 70, 90));
// console.log(processStudent("Amit", 60, 75, 85));
// console.log(processStudent("Ravi", 25, 50, 60));

// function compareAverages(avg1, avg2) {
//     if (avg1 > avg2) {
//         return "First student has higher average";
//     } else if (avg2 > avg1) {
//         return "Second student has higher average";
//     } else {
//         return "Both averages are equal";
//     }
// }

// console.log(compareAverages(80, 15));
