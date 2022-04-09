"use strict";

const calcAvg = function (sc1, sc2, sc3) {
  return (sc1 + sc2 + sc3) / 3;
};

const avgKoalas = calcAvg(2, 2, 2);
const avgDolphins = calcAvg(3, 3, 3);

const chechWinner = function (avgKoalas, avgDolphins) {
  if (avgKoalas >= 2 * avgDolphins) {
    return "Koalas won";
  } else if (avgKoalas <= 2 * avgDolphins) {
    return "Doplhins won";
  } else {
    return "No winner";
  }
};

console.log(chechWinner(avgKoalas, avgDolphins));
