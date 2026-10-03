//  Q=1
 let temp = [28, 32, 25, 40, 18, 35];
 let count = 0;
 for (let i = 0; i < temp.length; i++) {
   if (temp[i] > 30) {
     count++;
   }
 }
 console.log( count);

//  Q=2

 let sum=0;
 let number=1235;
 let str=String(number);
 for (let i=0;i<str.length;i++){
     sum+=Number(str[i]);
 }
     console.log(sum)

//  Q=3
 for(let i=1;i<=100;i++){
     if (i%3==0 && i%5==0 && i%7!=0){
         console.log(i)
     }
 }


//  Q=4

 let str = "JavaScript";
 let result = "";
 for(let i=0; i<str.length; i++){
     if(str[i]!="a" && str[i]!="e" && str[i]!="i" && str[i]!="o" && str[i]!="u"){
         result += str[i];
     }
 }
 console.log(result);


//  Q=5
 let arr = [11, 27, 13, 40, 15];
 let largest = 0;
 let secondLargest = 0;
 for(let i=0; i<arr.length; i++){
     if(arr[i] > largest){
         secondLargest = largest;                                                     not in try and uses
         largest = arr[i];
     }
     else if(arr[i] > secondLargest && arr[i] != largest){
         secondLargest = arr[i];
     }
 }
 console.log(secondLargest);

//  Q=6

 let number = 16;
 let sum = 0;
 for (let i = 1; i < number; i++) {
     if (number % i == 0) {
         sum += i;
     }
 }
 if (sum == number) {
     console.log("Perfect Number");
 } else {
     console.log("Not a Perfect Number");
 }

//  Q=7

 let number = 1;
 for (let i = 0; i < 8; i++) {
     console.log(number);
     number = number * 2;
 }

//  Q=8

 let a = 0;
 let b = 1;
 for (let i = 0; i < 20; i++) {
     console.log(a);   
     let c = a + b;
     a = b;
     b = c;
 }

//  Q=9

 let scores = [45, 78, 90, 32, 56, 88];
 let total = 0;
 for (let i = 0; i < scores.length; i++) {
     total = total + scores[i];
 }
 let average = total  scores.length;
 let count = 0;
 for (let i = 0; i < scores.length; i++) {
     if (scores[i] > average) {
         count++;
     }
 }
 console.log("Average =", average);
 console.log("Above  =", count);

//  Q=10
let number = 10;
let binary = "";
for ( ;number > 0; number = Math.floor(number  2)) {
    let remainder = number % 2;
    binary = remainder + binary;
}
console.log("Binary =", binary);