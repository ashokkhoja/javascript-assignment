//  Q=1

 let i=1;
 while (i<=10){
     console.log(i)
     i+=1

 }

//  Q=2

 let i=1;
 let sum=0;
 while (i<=10){
     sum+=i
     console.log(sum)
     i+=1
 }


//  Q=3

 let i=5;
 while (i<=5){
     let j=1
     while (j<=10){
         console.log(`5 x ${j}=${i*j}`)
         j+=1
     }
     i+=1
 }

//  Q=4

 let n = 583725;
 let sum = 0;
 while (n > 0) {
     n = Math.floor(n  10);
     sum++;
 }
 console.log(sum);


//  Q=5


 let n=546484;
 let reverse=0
 while (n>0){
     let digit=n%10;
     reverse=reverse*10+digit
     n=Math.floor(n10)
    
 }
 console.log(reverse)


//  Q=6

 let n=47291;
 let sum=0;
 while(n>0){
     let digit=n%10
     sum=sum+digit
     n=Math.floor(n10)
 }
 console.log(sum)

//   Q=7

 let i=1;
 while (i<=100){
     if (i%3==0 && i%5==0 && i%7!=0){
         console.log(i)
     }
     i+=1
 }


//  Q=8

 let i=1;
 let fact=1;
 while (i<=5){
     fact*=i
     console.log(fact) 
     i++; 
    
 }


//  Q=9

 let n=1251;
 let a=n;
 let reverse=0;
 while (n>0){
     let digit=n%10;
     reverse=reverse*10+digit
     n=Math.floor(n10)
 }
 if (a==reverse){
     console.log("palidrome numbers")
 }
 else{
     console.log("not a palidrome numbers")
 }

//  Q=10
 let n=13;
 let binary=""
 while(n>0){
     let remainder=n%2;
     binary=remainder+binary
     n=Math.floor(n2)
 }
 console.log(binary)






