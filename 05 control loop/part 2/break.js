//  Q=1
 let arr = [1,2,3,4,5,6,7,8,9];
 for (let i = 0; i < arr.length; i++) {
     if (arr[i] == 7) {
         console.log(i);
         break;
     }
 }

//  Q=2
 let password = "1234";
 let correctPassword = "1234";
 let granted = false;
 for (let i = 1; i <= 5; i++) {
     if (password == correctPassword) {
         console.log("Access granted");
         granted = true;
         break;
     }
 }
 if (granted == false) {
     console.log("Account locked");
 }

//  Q=3
 let sum=1
 for(let i=1;i<=100;i++){
    sum+=i;
    if (sum>100){
     console.log(i);
     break;
    }
 }

//  Q=4
 let arrr=["sunita","suman","sarkar","jaat","sushil","ram","shyam"]
 for (let i=0;i<arr.length;i++){
     if (arrr[i][0]=="s"){
          console.log(arrr[i])
         break;
     }
   
 }

//  Q=5
for(let i=1;i<=50;i++){
    if (i>=20 && Number.isInteger(Math.sqrt(i))){
        console.log(i)
        break;}
        console.log(i)
}