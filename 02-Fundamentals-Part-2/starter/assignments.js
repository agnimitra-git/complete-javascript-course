"use strict";

function c(value) {
  console.log(value);
}

let getLicense = false;
const driverLicense = true;

if (driverLicense) getLicense = true;
// if (getLicense) c("Drive, the shit!!");

// Assingnment #1 – Functions
//#region
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and it's capital city is ${capitalCity}`;
}
const message = describeCountry("India", 130, "Delhi");
// c(message);

//#endregion

// Assingnment #2 – Functions as declarations and expressions. The difference is in calling the function. It behvaes becasue of the concept called hoisting.
//#region

// Function as declaration
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentage = percentageOfWorld1(1330);
// c(percentage);

// Function as an expression

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};
// c(percentageOfWorld2(1441));
//#endregion

// Assingnment #3 – Arrow functions. Fundamental difference is with arrow functions one cannot use this within it.
//#region

// Function as an arrow function

const percentageOfWorld3 = (population, capitalCity) => {
  const percentage3 = (population / 7900) * 100;
  return `Population of ${capitalCity} is not ${percentage3}% of India's population`;
};
// c(percentageOfWorld3(1271, "Mumbai"));

//#endregion

// Assingnment #4 – Functions calling other functions
//#region

const describePopulation = (country, population) => {
  return `${country} has ${population} million people which is about ${percentageOfWorld1(
    population
  )}% of the world`;
};

// c(describePopulation("India", 1330));
// c(describePopulation("China", 1441));
// c(describePopulation("Finland", 13));

//#endregion
