// Q=1
for(let i=1;i<=30;i++){
    if(i%4==0){
        continue;
    }
    console.log(i)
}

// Q=2
let sum=0;
let arr=[2,1,-1,5,-8];
for (let i=0;i<arr.length;i++){
    if(arr[i]<0){
        continue;
    }
    sum+=arr[i];
}
console.log(sum);

// Q=3
let str = "Hello World";
for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
        continue;
    }
    console.log(str[i]);
}

// Q=4

for (let i = 1; i <= 12; i++) {
    let product = 6 * i;
    if (product % 5 == 0) {
        continue;
    }
    console.log("6 x " + i + " = " + product);
}

// Q=5

let age = [12, 18, 25, 15, 30, 17, 22];
for (let i = 0; i < age.length; i++) {
    if (age[i] < 18) {
        continue;
    }
    console.log(age[i]);
}