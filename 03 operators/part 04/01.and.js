1. Logical AND &&
1.
let usrname="admin";
let password=1234;
console.log(usrname && password);

2.
let isLoggedIn=true;
let hasPermission=true;
console.log(isLoggedIn&&hasPermission);

3.
let instock=true;
let price=800;
console.log(instock&&price)

4.
let marks=75;
let attendance=80;
console.log(marks>65&&attendance>70);

5.
isweeked=true;
isholiday=false;
console.log(isweeked&&isholiday);

6.
let a = 0;
let b = 10;
let result = a && b;
console.log(result);   0

7.
let x = 5;
let y = 10;
let p= (x > 3 && y) || 0;
console.log(p);   10

8.
let p = "Hello";
let q = "";
let r = "World";
let result = p && q && r;
console.log(result);  ""

9.
let val = 5;
let condition = val && (val = 0);
console.log(condition);
console.log(val);  0,0 

10
let x = 10;
let y = 20;
let result = (x && y) && (x > y);
console.log(result);          false
