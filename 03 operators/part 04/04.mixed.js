1.
 let isMember = true;
 let isBanned = false;
 let canEnter = isMember && !isBanned;
 console.log(canEnter);

2
 let isStudent = true;
 let issenior=false;
 let isBanned = true;
 let a=(isStudent || issenior) && !isBanned;
 console.log(a)  

3
 let nameGiven = true;
 let emailGiven = false;
 let phoneGiven = true;
 let b=(nameGiven)&&(emailGiven||phoneGiven);
 console.log(b)

4
 let isAdmin = true;
 let hasToken = false;
 let isSuspended = false;
 let c=(isAdmin||hasToken)&&isSuspended;
 console.log(c)

5
 let score=1200;
 let timebonus=false;
 let extralife=true;
 let d=score>1000&&(timebonus||extralife)
 console.log(d)

6
 let a = 0;
 let b = 10;
 let c = 20;
 let result = a || b && c;
 console.log(result);  20

7
 let p = true;
 let q = false;
 let r = true;
 let result = p && q || r;
 console.log(result);  true


8
 let x = 10;
 let y = 20;
 let result = !(x && y) || (x > 5 && y < 30) && true;
 console.log(result);  true

9
 let a = 5;
 let b = 0;
 let c = 10;
 let result = a && b || c;
 console.log(result);   10

10
 let val1 = false;
 let val2 = true;
 let val3 = false;
 let result = !(val1 || val2) && val3 || true;
 console.log(result);   true