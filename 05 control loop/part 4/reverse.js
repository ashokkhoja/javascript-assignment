//  Q=1
 let a="";
 for(let i=50;i<=1;i--){
     if (i%3==0 && i%9!=0){
         a=a+i+" ";
     }
 }
 console.log(a)

//  Q=2
 let a = "";
 let arr = [12, 45, 7, 23, 56, 89, 34];
 for (let i = arr.length - 1; i >= 0; i--) {
     if (arr[i] < 50) {
         a = arr[i];
         break;
     }
 }
 console.log(a);

//  Q=3

 let n = 4729;
 let t= 1;                                              Q=3 

 for (let i = n; i > 0; i = Math.floor(i / 10)) {
     let digit = i % 10;
     if (digit % 2 != 0) {
         t= t* digit;
     }
 }

 console.log(product);


//  Q=4
 let a = "";
 let str = "Programming";
 for (let i = str.length - 1; i >= 0; i--) {
     if (
         str[i] != "a" &&
        //  str[i] != "e" &&      Q=4
         str[i] != "i" &&
         str[i] != "o" &&
         str[i] != "u"
     ) {
         a = a + str[i];
     }
 }
 console.log(a);


//  Q=5
 let a = 0;
 let b = 1;      
 let arr = [];
 for (let i = 0; i < 15; i++) {
     arr[i] = a;
     let c = a + b;
    //  a = b;        Q=5
     b = c;
 }
 for (let i = 14; i >= 0; i--) {
     console.log(arr[i]);
 }


 Q=6
 let n = 1221;
 let s = n;
 let reverse = 0;
 for (let i = n; i > 0; i = Math.floor(i / 10)) {
     let digit = i % 10;
     reverse = reverse * 10 + digit;
 }
 if (s == reverse) {
     console.log("Palindrome");
 } else {
     console.log("Not Palindrome");
 }

 Q=7
 let arr = [32, 28, 41, 19, 35, 27, 38];
 let count = 0;
 for (let i = arr.length - 1; i >= 0; i--) {
     if (arr[i] < 30) {
         count++;
     }
 }
 console.log(count);

 Q=8

 let n = 13;
 let binary = "";
 for (let i = n; i > 0; i = Math.floor(i / 2)) {
     let digit = i % 2;
     binary = binary + digit;
 }
 console.log(binary);


 Q=9
 let arr = [90, 85, 70, 95, 60, 88, 75];
 for (let i = arr.length - 1; i >= 0; i--) {
     if (arr[i] > 80) {
         console.log("Score:", arr[i]);
         console.log("Index:", i);
         break;
     }
 }


 Q=10
 for (let i = 40; i >= 1; i--) {
    // //  let square = Math.sqrt(i);
    // //  if (square == Math.floor(square)) {
         continue;
     }
     console.log(i);
 }
