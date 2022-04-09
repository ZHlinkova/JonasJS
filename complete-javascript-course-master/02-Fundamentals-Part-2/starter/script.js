"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// // if (hasDriversLicense) console.log(`I can drive`);

// const interface = "dsad"; //reserved for the future

//FUNCTIONS

// function declaration

// logger("aa"); //calling before declaring
// function logger(text) {
//   console.log(text);
// }

// //function expressions
// // logger2("dsad"); not possible to call before defining it
// const logger2 = function (text) {
//   console.log(text);
// };

// logger("fsddf");
// logger2(`dsad`);

// const orange = logger("fsfds");

// console.log(orange);

// //arrow functions - added in ES6

// const calcage = (birthyear) => 2022 - birthyear;

// console.log(calcage(1990));

// const yearsToRetire = (birthyear) => {
//   const age = 2022 - birthyear;
//   return 65 - age;
// };

// console.log(yearsToRetire(1990));
// const yearsToRetire2 = (birthyear, yearNow) => {
//   const age = yearNow - birthyear;
//   return 65 - age;
// };

// console.log(yearsToRetire2(1990, 2032));

// //function calling other functions

// const cutter = function (fruit) {
//   return fruit * 4;
// };

// const fruitProcessor = function (apples, oranges) {
//   const orangePieces = cutter(oranges);
//   const applePieces = cutter(apples);

//   const juice = `${applePieces} apple pieces and ${orangePieces} orange pieces.`;
//   return juice;
// };

// console.log(fruitProcessor(10, 15));

///ARRAYS

// const myFriends = ["Jana", "Kaja", "Karla"];
// console.log(myFriends, myFriends[0]);

// //another way how to create array

// const years = new Array(1990, 2003, 3005, 4);

// //any expression in the brackets

// console.log(years[years.length - 1]);

// myFriends[1] = "Peta";
// console.log(myFriends);

// //myFriends = ["Anna"];

// //express

// const zuzkaInfo = ["Zuzka", 2022 - 1990, "analyst", myFriends];
// console.log(zuzkaInfo);

// const calcMyAge = function (birth) {
//   return 2022 - birth;
// };

// console.log(calcMyAge(years[1]));

// //basic array operations - METHODS

// console.log(myFriends.push("Xenie"));

// console.log(myFriends.unshift("Bruno"));

// console.log(myFriends);

// console.log(myFriends.pop());

// console.log(myFriends.shift());

// console.log(myFriends);

// console.log(myFriends.indexOf("Karla"));

// console.log(myFriends.includes("Karla"));

//OBJECTS

// const zuzkaObject = {
//   firstName: `Zuzka`,
//   lastName: `Hlinkova`,
//   job: `BI developer`,
//   birthYear: 1990,
//   friends: ["Jana", "Irena"],
// };

// console.log(zuzkaObject);

// //dot vs bracket notation

// console.log(zuzkaObject.birthYear);

// console.log(zuzkaObject["job"]);

// const nameKey = "Name";

// console.log(zuzkaObject[`last${nameKey}`]);

// const question = prompt(`What do you want to know about me?`);

// if (zuzkaObject[question]) {
//   console.log(zuzkaObject[question]);
// } else {
//   console.log(`This property is not defined`);
// }

// zuzkaObject.city = `Prague`;
// zuzkaObject[`uni`] = `VSE`;

// console.log(zuzkaObject);

// console.log(
//   `I have ${zuzkaObject.friends.length} friends and the best one is called ${zuzkaObject.friends[0]}.`
// );

//OBJECT METHODS
// const zuzkaObject = {
//   firstName: `Zuzka`,
//   lastName: `Hlinkova`,
//   job: `BI developer`,
//   birthYear: 1988,
//   friends: ["Jana", "Irena"],
//   isDriver: true,
//   calAge: function () {
//     console.log(this);
//     this.age = 2022 - this.birthYear;
//     return this.age;
//   },
//   license: function () {
//     return this.isDriver ? "a" : "no";
//   },
// };

// console.log(zuzkaObject.age);

// console.log(
//   `I am a ${zuzkaObject.calAge()}-year old developer and I have ${zuzkaObject.license()} license.`
// );

//LOOPS

// for (let iter = 5; iter < 11; iter++) {
//   console.log(`Lifting weights repetition ${iter}.`);
// }

//looping arrays

// const myFriends = ["Jana", "Kaja", "Karla"];

// const zuzkaInfo = ["Zuzka", 2022 - 1990, "analyst", myFriends, true];

// //empty array
// const types = [];

// for (let i = 0; i < zuzkaInfo.length; i++) {
//   console.log(zuzkaInfo[i], typeof zuzkaInfo[i]);
//   // types[i] = typeof zuzkaInfo[i];
//   types.push(typeof zuzkaInfo[i]);
// }

// console.log(types);

// const birthYears = [1999, 2005, 2012];
// const ages = [];

// for (let j = 0; j < birthYears.length; j++) {
//   ages.push(2022 - birthYears[j]);
// }

// console.log(ages);

// //CONTINUE and BREAK statements

// for (let i = 0; i < zuzkaInfo.length; i++) {
//   if (typeof zuzkaInfo[i] !== "string") continue;
//   console.log(zuzkaInfo[i], typeof zuzkaInfo[i]);

//   // types[i] = typeof zuzkaInfo[i];
//   // types.push(typeof zuzkaInfo[i]);
// }

// console.log(`---BREAKS with NUMBER---`);
// for (let i = 0; i < zuzkaInfo.length; i++) {
//   if (typeof zuzkaInfo[i] === "number") break;
//   console.log(zuzkaInfo[i], typeof zuzkaInfo[i]);

// types[i] = typeof zuzkaInfo[i];
// types.push(typeof zuzkaInfo[i]);
// }

//WHILE LOOP

let iter = 1;

while (iter < 11) {
  console.log(`Lifting weights repetition ${iter}.`);
  iter++;
}

let tryDice = Math.trunc(Math.random() * 6) + 1;

console.log(tryDice);

while (tryDice !== 6) {
  console.log(`Not six - ${tryDice}`);
  tryDice = Math.trunc(Math.random() * 6) + 1;
}

console.log(`Six - ${tryDice}`);
