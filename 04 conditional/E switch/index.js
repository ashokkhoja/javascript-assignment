1
let month = 1;

switch (month) {
 case 1:  January
 case 3:  March
 case 5:  May
 case 7:  July
 case 8:  August
 case 10: October
 case 12: December
  console.log("31 days");
  break;
 case 4:  April
 case 6:  June
 case 9:  September
 case 11: November
  console.log("30 days");
  break;
 case 2:  February
  console.log("28 days");
  break;
 default:
  console.log("Invalid month number");
}


2

let chracter='b';
switch(chracter){
    case "a" :
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Vowel")
        break;
    default:
        console.log("consonant")      
}


3

let number=5;
switch(number){
    case 1:
    case 2:
        console.log("Winter")
        break;
    case 3:
    case 4:
        console.log("summer") 
        break;   
    default:
        console.log("invalid ruti")

}


4

let marks=0;
switch(true){
    case marks>=75 && marks<=100:
        console.log("Distinction")
        break;
   case marks>=60 && marks<=74:
        console.log("1 st class")
        break;
    case marks>=50 && marks<=59:
        console.log("2 nd class")
        break;
     case marks>=50 && marks<=35:
        console.log("3 rd class")
         break;
    case marks<=35 && marks>=0:
       console.log("Failed")
        break;
    default:
        console.log("Invalid marks")
}



5

let role = "admin";
let action = "create";
switch (role) {
    case "admin":
        switch (action) {
            case "create":
                console.log("Creating ");
                break;
            case "edit":
                console.log("Editing ");
                break;
            case "delete":
                console.log(" Deleting ");
                break;
            default:
                console.log("Invalid admin");
        }
        break;
    case "user":
        console.log("Limited Access");
        break;
    default:
        console.log("Invalid role.");
}


6


let fruit = "mango";

switch (fruit) {
  case "apple":
    console.log("Apple is red");
    break;
  case "mango":
    console.log("Mango is yellow");
    break;
  case "banana":
    console.log("Banana is yellow");
    break;
  default:
    console.log("Unknown fruit");
}



7

let value = 0;
switch (true) {
    case value === 0:
        console.log("Number (0)");
        break;
    case value === "0":
        console.log('String ("0")');
        break;
    case value === false:
        console.log("Boolean (false)");
        break;
    case value === null:
        console.log("Null");
        break;
    case value === undefined:
        console.log(" Undefined");
        break;
    default:
        console.log("Other value");
}


8

let operator = "**";
let a = 10, b = 5;
switch (operator) {
  case "+":
    console.log(a + b);
    break;
  case "-":
    console.log(a - b);
    break;
  case "*":
    console.log(a * b);
    break;
  case "/":
    console.log(a / b);
    break;
  case "%":
    console.log(a%b)
    break;
  case "**":
    console.log(a**b)
    break;
  default:
    console.log("Invalid operator");
}

9
let day = 15;
switch (true) {
    case (day >= 1 && day <= 10):
        console.log("Beginning of the month");
        break;
    case (day >= 11 && day <= 20):
        console.log("Middle of the month");
        break;
    case (day >= 21 && day <= 31):
        console.log("End of the month");
        break;
    default:
        console.log("Invalid date");
}

10

let category = "veg"; 
let item = "paneer Tikka";  
let size = "full";   
let price = 0;
let itemName = "";
let categoryName = "";
let sizeName = "";

switch (category.toLowerCase()) {
  case "veg":
    categoryName = "Vegetarian";
    switch (item.toLowerCase()) {
      case "paneer tikka":
        itemName = "Paneer Tikka";
        switch (size.toLowerCase()) {
          case "half":
            sizeName = "Half";
            price = 150;
            break;
          case "full":
            sizeName = "Full";
            price = 260;
            break;
          default:
            console.log("Invalid size selected for Paneer Tikka.");
        }
        break;
      case "dal makhani":
        itemName = "Dal Makhani";
        switch (size.toLowerCase()) {
          case "half":
            sizeName = "Half";
            price = 120;
            break;
          case "full":
            sizeName = "Full";
            price = 200;
            break;
          default:
            console.log("Invalid size selected for Dal Makhani.");
        }
        break;
      default:
        console.log("Invalid vegetarian item selected.");
    }
    break;
  case "nonveg":
    categoryName = "Non-Vegetarian";
    switch (item.toLowerCase()) {
      case "chicken biryani":
        itemName = "Chicken Biryani";
        switch (size.toLowerCase()) {
          case "half":
            sizeName = "Half";
            price = 180;
            break;
          case "full":
            sizeName = "Full";
            price = 320;
            break;
          default:
            console.log("Invalid size selected for Chicken Biryani.");
        }
        break;
      case "butter chicken":
        itemName = "Butter Chicken";
        switch (size.toLowerCase()) {
          case "half":
            sizeName = "Half";
            price = 220;
            break;
          case "full":
            sizeName = "Full";
            price = 380;
            break;
          default:
            console.log("Invalid size selected for Butter Chicken.");
        }
        break;

      default:
        console.log("Invalid non-vegetarian item selected.");
    }
    break;
  default:
    console.log("Invalid category selected. Choose 'veg' or 'nonveg'.");
}
if (price > 0) {
  console.log("--- ORDER SUMMARY ---");
  console.log(`Category : ${categoryName}`);
  console.log(`Item     : ${itemName}`);
  console.log(`Size     : ${sizeName}`);
  console.log(`Price    : ₹${price}`);
  console.log("---------------------");
}