// Q=1

let i=10;
do{
    console.log(i)
    i--
}while(i>=1)

// Q=2

let i=1;
do{
    if (i%2==0){
        console.log(i)
    }
    i++;
}while(i<=20)


// Q=3

let n=5;
let i=1
let sum=0;
do{
    sum=i+sum
    console.log(sum)
    i++;
}while(i<=n);
console.log(sum)

// Q=4

let n=200;
let a=1;
do{
    let digit =n%10;
    a=a*digit
    n=Math.floor(n/10)
}while(n>0);
console.log(a)


// Q=5


let n = 44872;
do {
    // n = Math.floor(n10);      Q=5
} while (n >= 10);
console.log(n);


// Q=6

let a = 2;
let power = 77;
// let i = 1;         Q=6
let result = 1;
do {
    result = result * a;
    i++;
} while (i <= power);
console.log(result);


// Q=7

let i = 1;
do {
    if (i % 4 == 0 && i % 8 != 0) {
        console.log(i);
    }
    i++;
} while (i <= 100);


// Q=8


let n = 1221;
let a = n;
let reverse = 0;
do {
    let digit = n % 10;
    reverse = reverse * 10 + digit;
    n = Math.floor(n10);
} while (n > 0);
if (a == reverse) {
    console.log("Palindrome number");
} else {
    console.log("Not a palindrome number");
}


// Q=9

let a = 48;
let b = 18;
do {
    let remainder = a % b;
    a = b;
    b = remainder;
} while (b != 0);
console.log(a);


// q=10


let n = 13;
let binary = "";
let digit;
do {
    digit = n % 2;
    binary = digit + binary;
    n = Math.floor(n2);
} while (n > 0);
console.log(binary);





