/ 3. Strict Equality ===

  1.
 let pass=1234;
 let passd="1234"
 console.log(pass===passd)
 2.
 let n=1234567890;
 let m=1234567890;
 console.log(n===m)
 3.
 let t=true;
 let o=1;
 console.log(t===o)
 4.
 let d=null;
 let o=undefined;
 console.log(d===o)
 5.
 let a=85;
 let c=85;
 console.log(a===c)

 let a = 0;
 let b = false;
 console.log(a === b);  false

 let x = "";
 let y = false;
 console.log(x === y);  false
 let p = "0";
 let q = 0;
 console.log(p === q);  false

 let m = null;
 let n = undefined;
 console.log(m === n);  false

 let val = NaN;
 console.log(val === val);  false