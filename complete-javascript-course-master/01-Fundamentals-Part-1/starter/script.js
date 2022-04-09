'use strict';

//BUG
//TODO

console.log(25 - 13);

let firstName = `Zuzana`;
console.log(`My name is ${firstName}`);

let PI = 3.14;

/* multi-line comments */

//DATA TYPES

//string
//number
//boolean
let verdict = false;
console.log(`Type of value in variable verdict is ${typeof verdict}`);

verdict = 'positive';
console.log(`Type of value in variable verdict is ${typeof verdict}`);
console.log(typeof 'verdict');
console.log(typeof 33);

//null
console.log(typeof null);
//undefined
let currentYear;
console.log(typeof currentYear);

//dynamic typing
currentYear = 2022;
console.log(typeof currentYear);

//symbol
//bigInt

//let, const, var
const birthZuzka = 1990;
const birthKatka = 1988;

//14. OPERATORS

const ageZuzka = currentYear - birthZuzka;
const ageKatka = currentYear - birthKatka;

console.log(ageZuzka, ageKatka);

console.log(2 ** 3);

console.log('Zuzka' + ' ' + 'Hlinkova', 2 + 3);

//assignment operators

let x = 2;
x += 2;
x -= 6;
x *= 4;
x **= 2;
x++;
x--;
console.log(x);

//comparison
console.log(ageKatka == ageZuzka);

const ageCompt = ageKatka > ageZuzka;

//CHALLENGE 1

let BMI = function (mass, height) {
  return mass / height ** 2;
};

console.log(BMI(60, 1.64));

const bmiMark = BMI(78, 1.69);
const bmiJohn = BMI(92, 1.95);

const markHigherBmi = bmiMark > bmiJohn;

console.log(bmiMark, bmiJohn, markHigherBmi);

console.log(`dsad
dadsad`);

console.log('dsad\ndadsad');

//taking decisions
const age = 17;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log(`Sarah is ok`);
} else {
  console.log(`Not ok`);
}

//CHALLENGE 2
if (bmiMark > bmiJohn) {
  console.log(
    `Mark has higher (${Math.round(bmiMark)}) BMI than John (${Math.round(
      bmiJohn
    )})`
  );
} else {
  console.log(
    `Mark has lower (${Math.round(bmiMark)}) BMI than John (${Math.round(
      bmiJohn
    )})`
  );
}

const inputYear = '1991';

//conversion and coercion

console.log(Number(inputYear), inputYear);

console.log(Number('fdsfs'));

console.log(typeof String(15));

//convert only to numbers, strings or booleans (truthy and falsy values)

//type coercion
console.log(`I am ` + 23 + ' years old');
console.log('23' - 15);

//falsy/truthy
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(25));

console.log(String(false));

const money = 0;

if (money) {
  console.log(`Don't spend it`);
} else {
  console.log(`Get a job!`);
}

//TODO
//BUG

// const ageX = Number(prompt(`What is your age?`));
// console.log(ageX);

//CHALLENGE 3

let avgScore = function (a, b, c) {
  return (a + b + c) / 3;
};

const avgDolphins = avgScore(150, 150, 150);
const avgKoalas = avgScore(60, 50, 50);

if (avgDolphins !== avgKoalas && Math.max(avgDolphins, avgKoalas) > 100) {
  console.log(`${avgDolphins > avgKoalas ? 'Dolphins' : 'Koalas'} won!`);
} else if (avgDolphins === avgKoalas) {
  console.log(`It's a draw!`);
}

//SWITCH statement

const day = 'Wed';

switch (day) {
  case 'Monday':
    console.log('Monday');
    break;
  case 'Tuesday':
    console.log('Tuesday');
    break;
  case 'Wed':
  case 'Thu':
    console.log('Wed and Thu');
    break;
  default:
    console.log('mistake');
}

//CHALLENGE 4
const bill = 1000;
const tip = bill <= 300 && bill >= 50 ? 0.15 * bill : 0.2 * bill;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total valueess ${
    bill + tip
  }.`
);
