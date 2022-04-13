"use strict";
function c(value) {
  console.log(value);
}
// Code challenge #1
//#region

// // Test data
// const dolphineScore1 = Number(prompt("Dolphine score 1"));
// c(dolphineScore1);
// const dolphineScore2 = Number(prompt("Dolphine score 2"));
// c(dolphineScore2);
// const dolphineScore3 = Number(prompt("Dolphine score 3"));
// c(dolphineScore3);

// const koalaScore1 = Number(prompt("Koalas score 1"));
// c(koalaScore1);
// const koalaScore2 = Number(prompt("Koalas score 2"));
// c(koalaScore2);
// const koalaScore3 = Number(prompt("Koalas score 3"));
// c(koalaScore3);

// //Function
// const calcAverage = (Score1, Score2, Score3) => (Score1 + Score2 + Score3) / 3;

// const avgDolphine = calcAverage(dolphineScore1, dolphineScore2, dolphineScore3);
// const avgKoala = calcAverage(koalaScore1, koalaScore2, koalaScore3);

// // c(`Average score of Dolphine is ${avgDolphine}`);
// // c(`Average score of Koala is ${avgKoala}`);

// const checkWinner = (value1, value2) => {
//   if (value1 >= 2 * value2) {
//     // c(`Dolphine wins by ${value1} vs. ${value2}`);
//     return value1;
//   } else if (value2 >= 2 * value1) {
//     // c(`Koala wins by ${value2} vs. ${value1}`);
//     return value2;
//   } else if (value1 === value2) {
//     // c(`It's a tie ${value1} vs. ${value2}`);
//     return value1;
//   } else {
//     // c("Nobody won");
//     return -1;
//   }
// };

// checkWinner(avgDolphine, avgKoala);
//#endregion

// Code challenge #2
//#region

// const bills = [
//   Number(prompt("Add bill amount 1")),
//   Number(prompt("Add bill amount 2")),
//   Number(prompt("Add bill amount 3")),
// ];
// c(bills);

// const calcTip = (billValue) => {
//   if (50 <= billValue && billValue <= 300) {
//     return billValue * 0.15;
//   } else {
//     return billValue * 0.2;
//   }
// };

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// c(tips);

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, totals);
//#endregion

// Code challlenge #3
//#region

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };

// mark.calcBMI();
// john.calcBMI();
// // console.log(john.BMI, mark.BMI);

// if (mark.BMI > john.BMI) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s BMI (${john.BMI})`
//   );
// } else if (mark.BMI < john.BMI) {
//   console.log(
//     `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s BMI (${mark.BMI})`
//   );
// }

//#endregion
