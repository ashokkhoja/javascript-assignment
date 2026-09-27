1.
let passwordCorrect = true
let otpValid = false
console.log(passwordCorrect||otpValid)

2.
let isMember = false
let hasCoupon = true
console.log(isMember||hasCoupon)

3.
let emailGiven = true
let phoneGiven = false
console.log(emailGiven||phoneGiven);

4.
let age = 16;
let height = 155;
console.log(age||height)

5.
let score = 900;
let timeBonus = true;
console.log(score||timeBonus)

6.
 let a = 0;
 let b = false;
 let c = "";
 let d = null;
 let e = 42;
 let result = a || b || c || d || e;
 console.log(result);  42

7.
 let i = "Hello" || 0;
 let y = 0 || "Hi";
 console.log(i, y);  Hello Hi

8.

 let a = 10;
 let b = 20;
 let result = (a < 5) || (b > 15);
 console.log(result);  true

 9.
 let val = 5;
 let condition = val || (val = 0);
 console.log(condition);
 console.log(val); 5    5

 10.
 let x = "" || 0 || false || null || undefined || "OK";
 console.log(x);    ok
 
