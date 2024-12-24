//console.log(`Hello world!`);

// window.alert(`I like Pizza`);

//Adding content to an element
// document.getElementById("myH1").textContent = `Hello!`;
// document.getpElementById("myP").textContent = `I like Pizza`;

//Variabble
// let age = 256;
// let price = 10.99;
// console.log(price);
// console.log("The price is: #", price);
// let gpa = 2.1;
// console.log(typeof age);
// console.log(`You are ${age} years old`);
// console.log(`The price is #${price}`);
// console.log(`The gpa is ${gpa}`);

// let firstName = "Bro";
// console.log(typeof firstName);
// console.log(`Your name is ${firstName}`);

//Boolean
// let name = "Ali";
// let online = false;
// let forSale = true;
// let isStudent = false;

// console.log(`${name} is online: ${online}`);
// console.log(`is this car for sale: ${forSale}`);
// console.log(`Enrolled: ${isStudent}`);

// adding text content to a HTML element
// let firstName = "summayyah";
// let age = 42;
// let isStudent = false;
// document.getElementById("p1").textContent = `Your name is ${firstName}`;
// document.getElementById("p2").textContent = `You are ${age} years old`;
// document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;

// Arithmetic Operator
//Operands (values, variables, etc)
//operators (+,*,-,/,**, etc) e.g 27 = x + 4

// let noOfStudents = 30;
// noOfStudents = noOfStudents + 1;
// noOfStudents = noOfStudents - 1;
// noOfStudents = noOfStudents * 2;
// noOfStudents = noOfStudents ** 2;
// noOfStudents = noOfStudents / 3;
// let extraStudents = noOfStudents % 3;

// console.log(noOfStudents);
// console.log(extraStudents );

// Augmented assignment operator
// let noOfProtester = 20;
// noOfProtester += 1;
// noOfProtester -= 1;
// noOfProtester *= 2;
// noOfProtester /= 4;
// noOfProtester **= 4;
// noOfProtester %= 3;

// console.log(`There ${noOfProtester} protesters`);

// Increament and Decrement
// let noOfProtester = 40;
// noOfProtester++;
// noOfProtester--;
// // ++noOfProtester;
// --noOfProtester;
// console.log(noOfProtester);

//Operator Precedence
/*
1. Parenthesis ()
2. Exponents
3. Multiplication, Division & Modulo
4. Addition & Subtraction
*/

// let result = 1 + 2 * 3 + 4 ** 2;
// let result = 12 % 5 + 8 / 2;
// let result = 6 / 2 ** 7;
// let result = 6 / 2 ** 7;
// console.log(result);

// How to accept user input
/*
1. Easy way = window prompt
2. Professional way = HTML textbox
*/

//Easy way: window prompt
// let userName;
// userName = window.prompt(`What's your username?`);
// console.log(`My username is ${userName}`);

// Professional way

// let username;
// document.getElementById("mySubmit").onclick = function () {
//   username = document.getElementById("myText").value;
//   document.getElementById("myH1").textContent = `Hello ${username}`;
//   console.log(`Your username is ${username}`);
// };

// or

// let username;
// document.getElementById("mySubmit").addEventListener("click", function () {
//   username = document.getElementById("myText").value;
//   document.getElementById("myH1").textContent = `Hello ${username}`;
// });

// Type Conversion = change the datatype of a value to another
// (Strings, numbers, boolean)

// let age = window.prompt("How old are you?");
// age = Number(age);
// age += 1;
// console.log(age, typeof age);

// let x = "Pizza";
// let y = "Pizza";
// let z = "Pizza";
// x = Number(x);
// y = String(y);
// z = Boolean(z);
// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// Const = a variable that can't be changed / using window prompt for input

// const PI = 3.14159;
// let radius;
// radius = window.prompt(`Enter the radius`);
// radius = Number(radius);
// let circumference = 2 * PI * radius;
// console.log(`The circumference of radius ${radius}cm,is ${circumference}cm`);

//  using professional way (Area and Circumference of a circle)

// let radius;
// let circum;
// const PI = 3.142;
// document.getElementById("btnArea").onclick = function () {
//   radius = document.getElementById("myRadius").value;
//   radius = Number(radius);
//   area = PI * radius ** 2;
//   document.getElementById("myArea").textContent = `Area = ${area}cm`;
// };

// document.getElementById("btnCircum").onclick = function () {
//   radius = Number(document.getElementById("myRadius").value);
//   circum = 2 * PI * radius;
//   document.getElementById(
//     "myCircum"
//   ).textContent = `Circumference = ${circum}cm`;
// };

// Counter program

// const decrease = document.getElementById("btnDecrease");
// const reset = document.getElementById("btnReset");
// const increase = document.getElementById("btnIncrease");
// const countLabel = document.getElementById("countLabel");
// let counter = 0;

// increase.onclick = function () {
//   counter++;
//   countLabel.textContent = counter;
// };

// decrease.onclick = function () {
//   counter--;
//   countLabel.textContent = counter;
// };
// reset.onclick = function () {
//   counter = 0;
//   countLabel.textContent = counter;
// };

// Math - is a built-in object that provides collection of properties and methods
// let x = 4;
// let y = 2;
// let z = 1;
// z = Math.round(x);
// z = Math.ceil(x);
// z = Math.floor(x);
// z = Math.trunc(x);
// z = Math.pow(x, y);
// z = Math.sqrt(x);
// z = Math.log(x);
// z = Math.sin(x);
// z = Math.cos(x)
// z = Math.tan(x)
// z = Math.abs(x)
// z = Math.sign(x)
// let max = Math.max(x, y, z);
// let min = Math.min(x, y, z);
// z = Math.tan(x)
// console.log(min);

// // Random Number Generator
// const min = 50;
// const max = 100;
// let randomNum = Math.floor(Math.random() * (max - min)) + min;
// console.log(randomNum);

// Rolling of 3 Dice

// const myButton = document.getElementById("myButton");
// const myLabel1 = document.getElementById("myLabel1");
// const myLabel2 = document.getElementById("myLabel2");
// const myLabel3 = document.getElementById("myLabel3");
// const min = 1;
// const max = 6;
// let randomNum1;
// let randomNum2;
// let randomNum3;

// myButton.onclick = function () {
//   randomNum1 = Math.floor(Math.random() * 6) + min;
//   randomNum2 = Math.floor(Math.random() * 6) + min;
//   randomNum3 = Math.floor(Math.random() * 6) + min;
//   myLabel1.textContent = randomNum1;
//   myLabel2.textContent = randomNum2;
//   myLabel3.textContent = randomNum3;
// };

// IF Statement- if a condition is true, execute some code.
//                if not, do something else.

// let age = 45;
// if (age >= 18) {
//   console.log(`You are old enough to enter this site`);
// } else {
//   console.log(`You must be 18+ to visit this site!`);
// }

// isStudent = false;
// if (isStudent) {
//   console.log(`You're a student`);
// } else {
//   console.log(`You're NOT a student!`);
// }

// Nested IF statement
// let age = 17;
// let hasLicense = false;
// if (age >= 16) {
//   console.log(`You're old enough to drive!`);
//   if (hasLicense) {
//     console.log(`You have your license`);
//   } else {
//     console.log(`You do not have license yet!`);
//   }
// } else {
//   console.log(`You must be 16+ to have a license!`);
// }

// Else IF Statement

// let age = 12;
// if (age >= 100) {
//   console.log(`You're are TOO OLD to visit this site!`);
// } else if (age > 18) {
//   console.log(`You're old enough to enter this site.`);
// } else if (age == 0) {
//   console.log(`You can't enter this site you were just born`);
// } else if (age < 0) {
//   console.log(`Your age can't be below 0!`);
// } else {
//   console.log(`You must be 18+ to visit this site!`);
// }

// const myText = document.getElementById("myText");
// const resultElement = document.getElementById("resultElement");
// const mySubmit = document.getElementById("mySubmit");
// let age;

// mySubmit.onclick = function () {
//   age = Number(myText.value);
//   if (age >= 100) {
//     resultElement.textContent = `You're TOO OLD to visit this site!`;
//   } else if (age == 0) {
//     resultElement.textContent = `You can't visit this site you were jus born!`;
//   } else if (age < 0) {
//     resultElement.textContent = `Your age can't be below 0!`;
//   } else if (age >= 18) {
//     resultElement.textContent = `You're are old enough to visit this site!`;
//   } else {
//     resultElement.textContent = `You must be 18+ to visit this site!`;
//   }
// };

// .checked- property that determined the checked state
//  of an HTML checkBox or radio button elment

// const myCheckBox = document.getElementById("myCheckBox");
// const visaBtn = document.getElementById("visaBtn");
// const masterCardBtn = document.getElementById("masterCardBtn");
// const payPalBtn = document.getElementById("payPalBtn");
// const mySubmit = document.getElementById("mySubmit");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");

// mySubmit.onclick = function () {
//   if (myCheckBox.checked) {
//     subResult.textContent = `You are subscribed!`;

//     if (visaBtn.checked) {
//       paymentResult.textContent = `You're paying with Visa card!`;
//     } else if (masterCardBtn.checked) {
//       paymentResult.textContent = `You are paying with masterCard!`;
//     } else if (payPalBtn.checked) {
//       paymentResult.textContent = `You are paying with PayPal!`;
//     } else {
//       paymentResult.textContent = `You must select a payment type`;
//     }
//   } else {
//     subResult.textContent = `You are NOT subscribed!`;
//   }
// };

// const myCheckBox = document.getElementById("myCheckBox");
// const visaBtn = document.getElementById("visaBtn");
// const masterCardBtn = document.getElementById("masterCardBtn");
// const payPalBtn = document.getElementById("payPalBtn");
// const mySubmit = document.getElementById("mySubmit");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");

// mySubmit.onclick = function () {
//   if (myCheckBox.checked) {
//     subResult.textContent = `You are subscribed!`;

//     if (visaBtn.checked) {
//       paymentResult.textContent = `You're paying with Visa card!`;
//     } else if (masterCardBtn.checked) {
//       paymentResult.textContent = `You are paying with masterCard!`;
//     } else if (payPalBtn.checked) {
//       paymentResult.textContent = `You are paying with PayPal!`;
//     } else {
//       paymentResult.textContent = `You mus select a payment type`;
//     }
//   } else {
//     subResult.textContent = `You are NOT subscribed!`;
//     if (visaBtn.checked || masterCardBtn.checked || payPalBtn.checked) {
//       paymentResult.textContent = `You need to subscribe before selecting a payment type`;
//     }
//   }
// };

// Ternary Operator- a shrtcut to if{} and else{} statements
//  helps to assign a variable based on a condition
// condition ? codeifTrue : codeIfFalse

// let age = 22;
// let message = age >= 18 ? `You're an adult` : `You're a minor`;
// console.log(message);

// let time = 16;
// let message = time < 12 ? `Good morning!` : `Good afternoon!`;
// console.log(message);

// let isStudent = true;
// let message = isStudent ? `You are a student` : `You are NOT a student`;
// console.log(message);

// let purchaseAmount = 120;
// let discount = purchaseAmount >= 100 ? 10 : 0;
// let payment = purchaseAmount - purchaseAmount * (discount / 100);
// console.log(`Your discounted payment is #${payment}`);

// SWITCH- can be a replacement for many else if statements

// let day = "Eba";
// switch (day) {
//   case "monday":
//     console.log("It is monday");
//     break;
//   case "Tuesday":
//     console.log("It is Tuesday");
//     break;
//   case "Wednesday":
//     console.log("It is Wednesday");
//     break;
//   case "Thursday":
//     console.log("It is Thursday");
//     break;
//   case "Friday":
//     console.log("It is Friday");
//     break;
//   case "Saturday":
//     console.log("It is Satday");
//     break;
//   case "Sunady":
//     console.log("It is Sunday");
//     break;
//   default:
//     console.log(`${day} is NOT a day`);
// }

// const today = document.getElementById("today");
// const submitBtn = document.getElementById("submitBtn");

// submitBtn.onclick = () => {
//   const enterDay = document.getElementById("day").value;

//   switch (enterDay) {
//     case "monday":
//       today.textContent = "Today is Monday!";
//       break;
//     case "Tuesday":
//       today.textContent = "Today is Tuesday!";
//       break;

//     case "Wednesday":
//       today.textContent = "Today is Wednesday!";
//       break;
//     case "Thursday":
//       today.textContent = "Today is Thursday!";
//       break;
//     case "Friday":
//       today.textContent = "Today is Friday!";
//       break;
//     case "Saturday":
//       today.textContent = "Today is Saturday!";
//       break;
//     case "Sunday":
//       today.textContent = "Today is Sunday!";
//       break;
//     default:
//       today.textContent = `${enterDay} is not a day!`;
//   }
// };

// let testScore = 2;
// let letterGrade;
// switch (true) {
//   case testScore >= 90:
//     letterGrade = "A";
//     break;
//   case testScore >= 80:
//     letterGrade = "B";
//     break;
//   case (testScore = 70):
//     letterGrade = "C";
//     break;
//   case (testScore = 60):
//     letterGrade = "D";
//     break;
//   case (testScore = 50):
//     letterGrade = "E";
//     break;
//   default:
//     letterGrade = "F";
// }
// console.log(letterGrade);

// String Methods-  allow you to manipulate and work with text(string)

// let userName = "AlitAde";
// console.log(userName.charAt(4));
// console.log(userName.indexOf("e"));
// console.log(userName.lastIndexOf("A"));
// userName = userName.trim();
// userName = userName.toUpperCase();
// userName = userName.toLowerCase();
// userName = userName.repeat(5);
// userName = userName.length;
// console.log(userName);

// StartWith and endWith Method
// let result = userName.startsWith(" ");
// if (result) {
//   console.log(`Username can't begin with A`);
// } else {
//   console.log(userName);
// }

// endsWith method
// let result = userName.endsWith(" ");
// if (result) {
//   console.log(`Username can't end with empty space`);
// } else {
//   console.log(userName);
// }

// // includes
// let result = userName.includes(" ");
// if (result) {
//   console.log(`Username can't include empty space`);
// } else {
//   console.log(userName);
// }

// replaceAll method
// let phoneNumber = "234-809-2603-509";
// phoneNumber = phoneNumber.replaceAll("-", "/");
// console.log(phoneNumber);

// padStart method padEnd
// let phoneNumber = "234-809-2603-509";
// phoneNumber = phoneNumber.padStart(17, "+");
// phoneNumber = phoneNumber.padEnd(17, "+");
// console.log(phoneNumber);

// string slicing
// const fullName = "Ade Aliu";
// let firstName = fullName.slice(1, 5);
// let lastName = fullName.slice(8);
// console.log(firstName);
// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ") + 1);

// let firstChar = fullName.slice(0, 1);
// let lastChar = fullName.slice(-1);

// console.log(firstChar);
// console.log(lastChar);
// console.log(firstName);
// console.log(lastName);

// PLP class
// string methods

// let alphabet = "ADHHBJHRDRHLLTF";

// function add(a, b) {
//   return a + b;
// }
// console.log(add(4, 7));

// arrow fxn
// const add = (a, b) => a + b;
// console.log(add(23, 8));

///////////////////////

// ARRAY
// const fruits = ["Apple", "Mango", "Orange"];
// console.log(fruits[2]);

// // map method
// const numbers = [1, 2, 3, 4, 5];
// const squared = numbers.map((num) => num * num);
// console.log(squared);

// filter

// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numbers.filter((num) => num % 2 === 0);
// console.log(evenNumbers);

// reduce mtd
// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log(sum);

///////////////////////
//find mtd

// const numbers = [1, 2, 3, 4, 5, 6];
// const firstEven = numbers.find((num) => num % 2 === 0);
// console.log(firstEven);

//COPYING
// const fruits = ["apple", "banana","cherry"];
// const copyFruits = [...fruits];
// console.log(copyFruits);

//COMBINE ARRAYS
// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const combined = [...arr1, ...arr2];
// console.log(combined);

//OPYING
// const fruits = ["apple", "banana", "cherry"];
// const copyFruits = [...fruits];
// console.log(copyFruits);

//COMBINE ARRAYS

//COMBINE ARRAYS
// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const combined = [...arr1, ...arr2];
// console.log(combined);

// const numbers = [4, 2, 3, 1];
// const sortNumbers = numbers.sort((a, b) => a - b);
// console.log(sortNumbers);

// const numbers = [4, 2, 3, 1];
// const reverseNumbers = numbers.reverse();
// console.log(reverseNumbers);

// // Object
// const person = {
//   name: "Ade",
//   age: 20,
//   sex: "Male",
//   email: "adebola@gmail.com",
// };
// console.log(person);

// Accessing object member
// using dot noation
// using bracket notation

// dot notaion
// console.log(person.name);
// console.log(person.email);

// bracket notation
// console.log(person["sex"]);
