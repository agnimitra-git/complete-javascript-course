// Code challenge #1
//#region
let massMark,
  massJohn,
  heightMark,
  heightJohn,
  bmiMark,
  bmiJohn,
  markhigherBMITestData1,
  markhigherBMITestData2;

massMark = 78;
heightMark = 1.69;

massJohn = 92;
heightJohn = 1.95;

bmiMark = massMark / heightMark ** 2;
bmiJohn = massJohn / heightJohn ** 2;

markhigherBMITestData1 = bmiMark > bmiJohn;
// console.log(markhigherBMITestData1);
// if (bmiMark > bmiJohn) {
//   console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})`);
// } else {
//   console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})`);
// }

massMark = 95;
heightMark = 1.88;

massJohn = 85;
heightJohn = 1.76;

bmiMark = massMark / (heightMark * heightMark);
bmiJohn = massJohn / (heightJohn * heightJohn);

markhigherBMITestData2 = bmiMark > bmiJohn;
// console.log(markhigherBMITestData2);
//#endregion

// Code challenge #2 – Using if else statement
//#region

// if (bmiMark > bmiJohn) {
//   // console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})`);
// } else {
//   // console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})`);
// }
//#endregion

// Code challenge #3 - Operators and statements
//#region
// const dolphineScore1 = Number(prompt("Enter dolphine's score 1"));
// const dolphineScore2 = Number(prompt("Enter dolphine's score 2"));
// const dolphineScore3 = Number(prompt("Enter dolphine's score 3"));
// const koalasScore1 = Number(prompt("Enter koalas score 1"));
// const koalasScore2 = Number(prompt("Enter koalas score 2"));
// const koalasScore3 = Number(prompt("Enter koalas score 3"));

// const dolphineAvg = (dolphineScore1 + dolphineScore2 + dolphineScore3) / 3;
// const koalasAvg = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

// if (dolphineAvg > koalasAvg) {
//   console.log("Dolphine's win!");
// } else if (dolphineAvg < koalasAvg) {
//   console.log("Koalas win!");
// } else if (dolphineAvg === koalasAvg) {
//   console.log("It's a draw!");
// } else {
//   console.log("None won");
// }

// if (dolphineAvg > koalasAvg && dolphineAvg >= 100) {
//   console.log("Dolphine's win with more than 100 points!");
// } else if (dolphineAvg < koalasAvg && koalasAvg >= 100) {
//   console.log("Koalas win with more than 100 points!");
// } else if (dolphineAvg === koalasAvg && dolphineAvg >= 100) {
//   console.log("It's a draw!");
// } else {
//   console.log("None won!");
// }
//#endregion

// Code challenge #4 - Ternary operator
//#region
// const bill = Number(prompt("Enter the billl value"));

// const tip = 300 >= bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bill was ${bill}, the tip was ${tip} and the total value was ${
//     bill + tip
//   }`
// );
//#endregion
