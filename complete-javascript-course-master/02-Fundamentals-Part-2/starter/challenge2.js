"use strict";

//CHALLENGE 4
const bills = [125, 555, 44];
const tip = (bill) => (300 && bill >= 50 ? 0.15 * bill : 0.2 * bill);

const tips = [tip(bills[0]), tip(bills[1]), tip(bills[2])];
const total = [
  tip(bills[0]) + bills[0],
  tip(bills[1]) + bills[1],
  tip(bills[2]) + bills[2],
];

console.log(tips, total);
