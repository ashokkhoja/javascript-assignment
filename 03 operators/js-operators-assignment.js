
//1. Addition +
let collection1=15000;
let collection2=12500;
let totalCollection=collection1+collection2
console.log(`The total collection is ${totalCollection}`)

let readMorning=18;
let readEvening=25;
let totalPage=readEvening+readMorning;
console.log(`the total page read is ${totalPage}`)

let soldMonday=125;
let soldTuesday=178;
let totalItemSold=soldMonday+soldTuesday;
console.log(`the total item sold is ${totalItemSold}`)



//2. Subtraction -
let totalSeat=80;
let occupiedSeat=53;
let emptySeat=totalSeat-occupiedSeat;
console.log(`The total empty seat are availabe is ${emptySeat}`)

let totalMarks=500;
let marksLose=35;
let finalMark=totalMarks-marksLose
console.log(`The final marks is ${finalMark}`)

let totalBox=2500;
let sendBox=875;
let remainingBox=totalBox-sendBox;
console.log(`The remaining box in warehouse are ${remainingBox}`)



//3. Multiplication *
let cost=45;
let notebookQuantity=8;
let totalPrice=cost*notebookQuantity;
console.log(`the total price of 8 notebook is ${totalPrice}`)

let perHour=120;
let hour=6;
let totalBottels=perHour*hour;
console.log(`The total bottel after 6 hour are ${totalBottels}`)

let totalRow=7;
let plant=15;
let totalPlant=totalRow*plant;
console.log(`the total plant in 7 row is ${totalPlant}`)



//4. Division /
let pencils=144;
let totalStudent=12;
let eachStudent=pencils/totalStudent;
console.log(`The number of pencile each student get ${eachStudent}`)

let travelDistance=360;
let timeTaken=6;
let average=travelDistance/timeTaken;
console.log(`The average speed of the train is ${average}`)

let totalMoney=72000;
let depertments=9;
let eachDepertment=totalMoney/depertments;
console.log(`the moiney each depertment get is ${eachDepertment}`)


//5. Modulus %
let totalStudents=53;
let groupOf=5;
let leftStudent=totalStudents%groupOf
console.log(`the remenaning student are ${leftStudent}`)

let totalCandies=128;
let packOf=10;
let leftCandies=totalCandies%packOf;
console.log(`the remaning candies from the pack ${leftCandies}`)

let num = Number(prompt("Enter a number:"));
if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

//6. Exponentiation **
let side=6;
let volume=side**3;
console.log(`the volume of cube is ${volume} cm`)

let bacteria=1;
let hours=4;
let bacteriaAfter=bacteria*(2**hours);
console.log(`the bacteria after the 4 hours is ${bacteriaAfter}`)

let oneCell=9;
let sides=4;
let totalCells=oneCell*(sides**2);
console.log(`The total number of cells are ${totalCells}`)



// Part B: Assignment Operators

// 1.simple assignment =

// // 1.
// let age=16;
// console.log(age)


// 2.
// let penprice=15;
// console.log(penprice)

// 3.
// let daysInWeek=7;
// console.log(daysInWeek)

// 4.
// let city="nagaur"
// console.log(city)

// 5.
// let piValue=3.14159
// console.log(piValue)

// 2. Add and Assign +=
// 1.
// let marks=200;
// marks+=35;
// console.log(marks)

// 2.
// let depositedBalance=5000;
// depositedBalance+=1200
// console.log(depositedBalance)

// 3.
// let batteryPercentage=45;
// batteryPercentage+=30;
// console.log(batteryPercentage)

// 4.
// let score=1250;
// score+=375
// console.log(score)

// 5.
// let totalBooks=840;
// totalBooks+=160
// console.log(totalBooks)

// 3. Subtract and Assign -=
// 1.
// let water=1000;
// water-=375
// console.log(water)

// 2.
// let money=500
// money-=180
// console.log(money)
// 3.
// let batteryPercentage=90;
// batteryPercentage-=45;
// console.log(batteryPercentage)

// 4.
// let boxes=2400;
// boxes-=950;
// console.log(boxes)

// 5.
// let score=2000;
// score-=625;
// console.log(score)

// 4. Multiply and Assign *=

// 1.
// let population=5000;
// population*=3;
// console.log(population)

// 2.
// let dailyproduction=120;
// dailyproduction*=4;
// console.log(dailyproduction);

// 3.
// let amount=2000;
// amount*=2;
// console.log(amount)

// 4.
// let totalPlant=50;
// totalPlant*=5;
// console.log(totalPlant)

// 5.
// let score=150;
// score*=3;
// console.log(score)

// 5. Divide and Assign /=
// 1.
// let lenthonePart=1200;
// lenthonePart/=4;
// console.log(lenthonePart)

// 2.
// let project=80000;
// project/=8
// console.log(project)
// 3.
// let sugarPacket=960;
// sugarPacket/=6
// console.log(sugarPacket)
// 4.
// let distance=450;
// distance/=5
// console.log(distance)
// 5.
// let studentMarks=2500;
// studentMarks/=10
// console.log(studentMarks)

// Modulus and Assign %=
// 1.
// let candies=137;
// candies%=10
// console.log(candies)
// 2.
// let student=250;
// student%=7
// console.log(student)
// 3.
// let days=1000
// days%=7
// console.log(days)
// 4.
// let chairs=89;
// chairs%=5
// console.log(chairs)
// 5.
// let months=365;
// months%=12
// console.log(months)

// Exponentiation and Assign **=
// 1.
// let square=10;
// square**=10
// console.log(square)
// 2.
// let cube=4
// cube**=4
// console.log(cube)
// 3.
// let imagefactor=3
// imagefactor**=3
// console.log(imagefactor)

// Part C: Comparison & Relational Operators
// 1. Loose Equality ==
// 1.
// let a=1234;
// let b="1234";
// console.log(a==b)
// 2.
// let c=0;
// let d=false;
// console.log(c==d)
// 3.
// let e="";
// let f=false;
// console.log(e==f)
// 4.
// let l=null;
// let m=undefined;
// console.log(l==m)
// 5.
// let x=500;
// let y="500";
// console.log(x==y)

// 2. Loose Inequality !=
// 1.

// let w="SAVE10";
// let v="SAVE20";
// console.log(w!=v)
// 2.
// let s="admin";
// let q="guest";
// console.log(s!=q)
// 3.
// let x=42;
// let f=false;
// console.log(x!=f)
// 4.
// let c="";
// let t=false;
// console.log(c!=t)
// 5.
// let j=null;
// let id=101;
// console.log(j!=id)

// 3. Strict Equality ===

// // 1.
// let pass=1234;
// let passd="1234"
// console.log(pass===passd)
// 2.
// let n=1234567890;
// let m=1234567890;
// console.log(n===m)
// 3.
// let t=true;
// let o=1;
// console.log(t===o)
// 4.
// let d=null;
// let o=undefined;
// console.log(d===o)
// 5.
// let a=85;
// let c=85;
// console.log(a===c)

// 4. Strict Inequality !==
// 1.
// let c="101";
// let s=101;
// console.log(c!==s)
// 2.
// let a=true;
// let q=1;
// console.log(a!==q)
// 3.
// let w="abc123";
// let i="abc124";
// console.log(w!==i)
// 4.
// let t=null;
// let d=undefined;
// console.log(t!==d)
// 5.
// let p=10;
// let o=20;
// console.log(p!==o)

// 5. Greater Than >
// 1.
// let age=20;
// let votingAge=18;
// console.log(age>votingAge)
// 2.
// let total=650;
// let limit=500;
// console.log(total>limit)
// 3.
// let score=1200;
// let newscore=1000;
// console.log(score>newscore)
// 4.
// let ins= 40000;
// let required=30000;
// console.log(ins>required)
// 5.
// let today=11000;
// let target=10000;
// console.log(today>target)


// 6. Less Than <
// 1.
// let marks=30;
// let thres=35;
// console.log(marks<thres)
// 2.
// let bg=8000;
// let aa=10000;
// console.log(bg<aa)
// 3.
// let item=7;
// let li=10;
// console.log(item<li)
// 4.
// let q=40;
// let s=50;
// console.log(q<s)
// 5.
// let w=4;
// let g=5;
// console.log(w<g)

// 7. Greater Than or Equal >=
// 1.
// let d=18;
// let f=18;
// console.log(d>=f)
// 2.
// let v=75;
// let a=75;
// console.log(v>=a)
// 3.
// let e=14;
// let r=13;
// console.log(e>=r)

// 4.
// let z=500;
// let s=500;
// console.log(z>=s)

// 5.
// let j=3;
// let x=2;
// console.log(j>=x)

// 8. Less Than or Equal <=
// 1.
// let people=7;
// let ma=8;
// console.log(people<=ma)
// 2.
// let si=5;
// let mb=5;
// console.log(si<=mb)
// 3.
// let age=12;
// let jun=12;
// console.log(age<=jun)
// 4.
// let bb=9.5;
// let cc=10;
// console.log(bb<=cc)
// 5.
// let w=40;
// let d=40;
// console.log(w<=d)