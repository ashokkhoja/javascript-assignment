Q=1
let number=44;
let result =number%7==0 ?"Divisible by 7" : "Not divisible by 7";
console.log(result)

Q=2/
let temperature=-5;
let result=temperature>=30 ?"Hot day" : "Pleasant Day";
console.log(result)

Q=3

let string="";
let result=string=="" ? "Empty string" : "string has content"
console.log(result)


Q=4

let age=15;
let result=age<13 ?"Child" : age >13 && age<19 ? "teenagar":"adult"
console.log(result)

Q=5

let a=15;
let b=14;
let c=8;
let result=a>b && a>c ?"A is grater then" : b>a && b>c ? "B is grater then" :"C is grater then"
console.log(result)

Q=6

let marks=-50;
let result=marks>=75 && marks<=100 ? "Distinction" : marks>=60 && marks<=74 ? 
"First Class" :marks>=50 && marks<=59 ? "Second class":marks>35 && marks<=49?"Pass":marks<=35 && marks>=0? "fail":"invaid marks"
console.log(result)


Q=7

let number = -45;
let result = number == 0 ? "Zero": number > 0 ? (number % 2 == 0 ? "Positive Even" : "Positive Odd")
          : (number % 2 == 0 ? "Negative Even" : "Negative Odd");
console.log(result);

Q=8

let year=2001;
let result=year%4==0 && year%100==0? "leap year":"not a leap year"
console.log(result)

Q=9
let role="user"
let action="view"
let result = role === "admin" ? (action === "delete" ? "Admin Delete" : action === "edit" ? "Admin Edit"  : "Admin Other"): role === "user"
    ? (action === "view" ? "User View"  : "User Restricted"): "Invalid Role";
    console.log(result)

Q=10

let total=500;
let answer=total>=5000 ? `discount=20% and final amount = ${total-(total*0.20)}`: total>=2000 ? `discount=10% and final amount = ${total-(total*0.10)}`: total>=1000 ? `discount=5% and final amount = ${total-(total*0.05)}`:`0% discount=${total-(total*0)}`
console.log(answer)