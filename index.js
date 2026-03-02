console.log("Hi");
console.log("Hello World");
//Data types
/*
1.String
2.Number
3.Boolean
4.Object
5.Undefined
6.Null
*/

let price = 28;
console.log("Price type:" + typeof price);
let name = "John";
console.log("Name type:" + typeof name);
let isAvailable = true;
console.log("isAvailable type:" + typeof isAvailable);
let person = {
  name: "John",
  age: 30,
};
console.log("Type of person: " + typeof person);
let x;
let y = null;
console.log(price);
console.log(name);
console.log(isAvailable);
console.log(person);
console.log(x);
console.log(y);

//ternary opearation
let age = 28;
let text = age < 18 ? "Minor" : "Adult";
console.log(text);

switch (new Date().getDay()) {
  case 6:
    text = "Today is saturday";
    break;
  case 0:
    text = "Today is sunday";
    break;

  case 1:
    text = "Today is Monday";
    break;
  case 2:
    text = "Today is Tuesday";
    break;
  case 3:
    text = "Today is wednesday";
    break;
  case 4:
    text = "Today is Thursday";
    break;
  default:
    text = "Looking forward to the Weekend";
}

let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
let j=0
let text2=""
do {
  text2 += "Th number is " + j;
  console.log(text2)
  j++;
}
 while (j <= 10);
