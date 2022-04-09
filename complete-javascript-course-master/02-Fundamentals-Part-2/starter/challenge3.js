"use strict";
const mark = {
  fullName: `Mark Miller`,
  wei: 78,
  hei: 1.69,
  calcBMI: function () {
    this.bmi = this.wei / this.hei ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: `John Smith`,
  wei: 92,
  hei: 1.95,
  calcBMI: function () {
    this.bmi = this.wei / this.hei ** 2;
    return this.bmi;
  },
};

console.log(mark.calcBMI());
console.log(john.calcBMI());

console.log(mark, john);

console.log(
  `John (${john.bmi}) has ${
    john.calcBMI() < mark.calcBMI() ? "lower" : higher
  } BMI than Mark (${mark.bmi}).`
);
