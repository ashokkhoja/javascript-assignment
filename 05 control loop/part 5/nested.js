//  Q=1
 let num = 1;
 for (let i = 1; i <= 4; i++) {
     let a = "";
     for (let j = 1; j <= i; j++) {
         a = a + num + " ";
         num++;
     }
     console.log(a);
 }

//  Q=2
 for (let i = 1; i <= 5; i++) {
     let a = "";
     for (let j = 1; j <= i; j++) {
         a = a + String.fromCharCode(64 + j) + " ";
     }
     console.log(a);
 }

//  Q=3
 for (let i = 1; i <= 5; i++) {
     let a = "";
     for (let j = 1; j <= i; j++) {
         if (j == 1 || j == i || i == 5) {
             a = a + "* ";
         } else {
             a = a + "  ";
         }
     }
     console.log(a);
 }


//  Q=4

 for (let i = 5; i >= 1; i--) {
     let a = "";
     for (let j = 1; j <= i; j++) {
         a = a + "*";
     }
     console.log(a);
 }



//  Q=5

 for (let i = 5; i >= 1; i--) {
     let a = "";
     for (let j = 1; j <= i; j++) {
         a = a + i + " ";
     }
     console.log(a);
 }

//  Q=6
 for (let i = 5; i >= 1; i--) {
     let a = "";
     for (let j = 1; j <= i; j++) {
         a = a + j + " ";
     }
     console.log(a);
 }

//  Q=7

 let num = 15;
 for (let i = 5; i >= 1; i--) {
     let a = "";
     for (let j = 1; j <= i; j++) {
         a = a + num + " ";
         num--;
     }
     console.log(a);
 }


//  Q=8

 for (let i = 5; i >= 1; i--) {
     let a = "";
     for (let j = 1; j <= i; j++) {
         if (i == 5 || j == 1 || j == i) {
             a = a + "* ";
         } else {
             a = a + "  ";
         }
     }
     console.log(a);
 }


//  Q=9

 for (let i = 1; i <= 5; i++) {
     let a = "";
     for (let j = 1; j <= 5; j++) {
         if (i == j) {
             a = a + "  ";
         } else {
             a = a + "* ";
         }
     }
     console.log(a);
 }

//  Q=10

 for (let i = 1; i <= 5; i++) {
     let a = "";
     for (let j = 1; j <= 10; j++) {
         let product = i * j;
         if (product % 2 == 0) {
             a = a + product + " ";
         }
     }
     console.log(a);
 }


//  Q=11

 let n = 5;
 for (let i = 0; i < n; i++) {
     let a = "";
     for (let j = 0; j < n; j++) {
         a = a + Math.abs(i - j) + " ";
     }
     console.log(a);
 }

//  Q=12

 for (let i = 1; i <= 10; i++) {
     for (let j = i + 1; j <= 10; j++) {
         let sum = i + j;
        //  let root = Math.sqrt(sum);
         if (root == Math.floor(root)) {
             console.log("(" + i + ", " + j + ")");
         }
     }
 }


//  Q=13
 let n = 5;
  Upper half
 for (let i = 1; i <= n; i++) {
     let a = "";
      Spaces
     for (let j = 1; j <= n - i; j++) {
         a = a + " ";
     }
      Increasing numbers
     for (let j = 1; j <= i; j++) {
         a = a + j;
     }
      Decreasing numbers
     for (let j = i - 1; j >= 1; j--) {
         a = a + j;
     }
     console.log(a);
 }
  Lower half
 for (let i = n - 1; i >= 1; i--) {
     let a = "";
      Spaces
     for (let j = 1; j <= n - i; j++) {
         a = a + " ";
     }
      Increasing numbers
     for (let j = 1; j <= i; j++) {
         a = a + j;
     }
      Decreasing numbers
     for (let j = i - 1; j >= 1; j--) {
         a = a + j;
     }
     console.log(a);
 }


//  Q=14

 let n = 6;
 let arr = [];
 for (let i = 0; i < n; i++) {
     arr[i] = [];
     for (let j = 0; j < n; j++) {
         arr[i][j] = 0;
     }
 }
 let num = 1;
 let top = 0;
 let bottom = n - 1;
 let left = 0;
 let right = n - 1;
 while (top <= bottom && left <= right) {
      Left → Right
     for (let j = left; j <= right; j++) {
         arr[top][j] = num;
         num++;
     }
     top++;
      Top → Bottom
     for (let i = top; i <= bottom; i++) {
         arr[i][right] = num;
         num++;
     }
     right--;
      Right → Left
     for (let j = right; j >= left; j--) {
         arr[bottom][j] = num;
         num++;
     }
     bottom--;
      Bottom → Top
     for (let i = bottom; i >= top; i--) {
         arr[i][left] = num;
         num++;
     }
     left++;
 }
  Print matrix
 for (let i = 0; i < n; i++) {
     let a = "";

     for (let j = 0; j < n; j++) {
         a = a + arr[i][j] + " ";
     }
     console.log(a);
 }


//  Q=15
 let n = 8;
 for (let i = 0; i < n; i++) {
     let a = "";
      Spaces for centering
     for (let j = 0; j < n - i - 1; j++) {
         a = a + "  ";
     }
     let value = 1;
      Pascal values
     for (let j = 0; j <= i; j++) {
         a = a + value + "  ";
         value = value * (i - j) / (j + 1);
     }
     console.log(a);
 }


//  Q=16
 let rows = 5;
 let cols = 6;
 for (let i = 0; i < rows; i++) {
     let a= "";
     for (let j = 0; j < cols; j++) {
         let value;
          Row + column divisible by 3
         if ((i + j) % 3 == 0) {
             value = 2;
         }
          Border
         else if (
             i == 0 ||
             i == rows - 1 ||
             j == 0 ||
             j == cols - 1
         ) {
             value = 1;
         }
          Inner cells
         else {
             value = 0;
         }
         a = a + value + " ";
     }
     console.log(a);
 }
