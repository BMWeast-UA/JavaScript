//Exercise 1
let firstName = "Denis";
let lastName = "Bondarenko";
let fullName = `${firstName} ${lastName}`;
console.log(fullName);

//Exercise 2
let length = 33;
let width = 18;
let s = length * width;
console.log(s);

//Exercise 3
Math.pow(10, 6);
console.log(Math.pow(10, 6));

//Exercise 4
console.log(Math.floor(Math.random() * 50));

//Exercise 5
let number = 24;
number > 0 ? console.log("Positive Value") : console.log("Negative Value");

//Exercise 6
let text = "Nice Day";
if (text.length > 0);
console.log(text[6]);

//Exercise 7
let month = 5;
switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;
  default:
    console.log("month not found");
}

//Exercise 8
let password = "ge&adfd";
if (password.length > 5) {
  if (password.indexOf("&")) {
    console.log("This password is strong");
  }
} else {
  console.log("This password is weak");
}

//Exercise 9
let a = 10;
let b = 7;
if (typeof a == "number" && typeof b == "number") {
  console.log(a + b);
} else {
  console.log("Sum of those items can’t be counted");
}

//Exercise 10
let textOne = "BMW";
let textTwo = "Mercedes";
if (
  typeof textOne === "string" &&
  typeof textTwo === "string" &&
  textOne.length === textTwo.length
) {
  console.log("Those items are strings and they're equal");
} else {
  console.log("Items are not compareble");
}
