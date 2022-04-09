"use sctrict";

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

const tip = (bill) => (300 && bill >= 50 ? 0.15 * bill : 0.2 * bill);

for (let billNo = 0; billNo < bills.length; billNo++) {
  tips.push(tip(bills[billNo]));
  total.push(bills[billNo] + tips[billNo]);
}

console.log(tips);
console.log(total);

const calcAverage = function (arr) {
  let runSum = 0;
  for (let i = 0; i < arr.length; i++) {
    runSum += arr[i];
  }
  console.log(runSum / arr.length);
};

calcAverage(tips);
