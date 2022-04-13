"use strict";

function c(value) {
  console.log(value);
}

// let getLicense = false;
// const driverLicense = true;

// if (driverLicense) getLicense = true;
// // if (getLicense) c("Drive, the shit!!");

// // Assingnment #1 – Functions
// //#region
// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and it's capital city is ${capitalCity}`;
// }
// const message = describeCountry("India", 130, "Delhi");
// c(message);

// #endregion

// Assingnment #2 – Functions as declarations and expressions. The difference is in calling the function. It behvaes becasue of the concept called hoisting.
// #region

// Function as declaration
// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// const percentage = percentageOfWorld1(1330);
// // c(percentage);

// // Function as an expression

// const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100;
// };
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

// Assingnment #5 – Arrays
//#region
// const populations = [13, 1441, 1330, 33];
// if (populations.length === 4) {
//   // c(true);
// } else {
//   // c(false);
// }
// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];

// c(percentages);

//#endregion

// Assingnment #5 – Array methods
//#region
const neighbours = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai"];

neighbours.push("Utopia");
// c(neighbours);

neighbours.pop();
// c(neighbours);

const checkCountry = neighbours.includes("Gernmany");
// c(checkCountry);

const whereIs = neighbours.indexOf("Hyderabad");
// c(whereIs);

neighbours[whereIs] = "Hey the ra bad";
// c(neighbours);

//#endregion

// Assingnment #6 – Objects
//#region
// const myCountry = {
//   country: "India",
//   capital: "Delhi",
//   language: "Hindi",
//   population: 133,
//   neighbours: ["Bhutan", "Nepal", "China", "Sri Lanka", "Pakistan"],

//   describe: function () {
//     return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
//   },
// };
// console.log(myCountry.describe());
// //#endregion

// // Assingnment #6 – Object notations
// //#region

// // console.log(
// //   `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
// // );

// myCountry.population = myCountry.population + 2;
// // console.log(myCountry.population);

// myCountry["population"] = myCountry["population"] - 2;
// console.log(myCountry["population"]);
//#endregion

// Assingnment #7 – Loops

//#region

for (let num = 1; num <= 50; num++) {
  console.log(`Voter number ${num} is currently voting.`);
}

//#endregion
