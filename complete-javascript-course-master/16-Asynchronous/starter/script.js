'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const nameC = `Uganda`;
const apiKey = `RZZ267K6YESB53V5`;

const getCountry = function (stockName) {
  fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockName}&apikey=${apiKey}`
  )
    .then(response => response.json())
    .then(data => {
      console.log(data);
      console.log(data['Time Series (Daily)'][`2022-03-18`][`4. close`]);
      console.log(Object.keys(data['Time Series (Daily)']));
      console.log(Object.values(Object.values(data['Time Series (Daily)'])));
    });
};

getCountry(`MELI`);
