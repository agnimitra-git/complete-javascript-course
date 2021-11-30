"use strict";
function c(value) {
  console.log(value);
}
// Code challenge #1
//#region

//Test data
const dolphineScore1 = Number(prompt("Dolphine score 1"));
c(dolphineScore1);
const dolphineScore2 = Number(prompt("Dolphine score 2"));
c(dolphineScore2);
const dolphineScore3 = Number(prompt("Dolphine score 3"));
c(dolphineScore3);

const koalaScore1 = Number(prompt("Koalas score 1"));
c(koalaScore1);
const koalaScore2 = Number(prompt("Koalas score 2"));
c(koalaScore2);
const koalaScore3 = Number(prompt("Koalas score 3"));
c(koalaScore3);

//Function
const calcAverage = (Score1, Score2, Score3) => (Score1 + Score2 + Score3) / 3;

const avgDolphine = calcAverage(dolphineScore1, dolphineScore2, dolphineScore3);
const avgKoala = calcAverage(koalaScore1, koalaScore2, koalaScore3);

c(`Average score of Dolphine is ${avgDolphine}`);
c(`Average score of Koala is ${avgKoala}`);

const checkWinner = (value1, value2) => {
  if (value1 >= 2 * value2) {
    c(`Dolphine wins by ${value1} vs. ${value2}`);
    return value1;
  } else if (value2 >= 2 * value1) {
    c(`Koala wins by ${value2} vs. ${value1}`);
    return value2;
  } else if (value1 === value2) {
    c(`It's a tie ${value1} vs. ${value2}`);
    return value1;
  } else {
    c("Nobody won");
    return -1;
  }
};

checkWinner(avgDolphine, avgKoala);
//#endregion
