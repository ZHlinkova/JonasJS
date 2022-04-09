// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//Prettier is opioniated formatter

const x = 23;
if (x == 23) console.log(`dsad`);

const birthyear = 2020;

const calcAge = birthyear => 2037 - birthyear;

console.log(`fsa`);

const measureKelvin = function () {
  const measurement = {
    type: `temperature`,
    unit: `celsius`,
    value: Number(prompt(`Degrees Celsius?`)),
  };
  console.log(measurement);
  const kelvin = measurement.value + 273;
  console.log(typeof measurement.value);
  console.table(measurement);
  //   console.warn(`sdfdf`);
  //   console.error(`fdsdf`);
  return kelvin;
};

console.log(measureKelvin());
