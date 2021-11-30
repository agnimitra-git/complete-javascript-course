let country = "India";
let continent = "Asia";
let population = 13;

// console.log(country);
// console.log(continent);
// console.log(population);

let isIsland = false;
let language;
// console.log(language);

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);

language = "English";
// console.log(language);
// language = "Marathi";
// console.log(language);

let halfPopulation = population / 2;
// console.log(halfPopulation);
// population += 1;
// console.log(population);

const finlandPopulation = 6;
// console.log(population > finlandPopulation);

const averagePopulation = 33;
// console.log(population < averagePopulation);

let description =
  country +
  " is in " +
  continent +
  ", " +
  "and it's " +
  population +
  " people speak " +
  language +
  ".";
// console.log(description);

const newDescription = `${country} is in ${continent}, and it's ${population} people speak ${language}.`;

// console.log(newDescription);

if (population > averagePopulation) {
  //   console.log(`${country}'s population is above average.'`);
  // } else {
  //   console.log(
  //     `${country}'s population is ${
  //       averagePopulation - population
  //     } million below average.`
  //   );
}

// Equality operator == vs. ====

const numNeighbours = Number();
//   prompt("Homw many neighbour countries does your county have?")

if (numNeighbours === 1) {
  // console.log("Only one border!");
} else if (numNeighbours > 1) {
  // console.log("More than one border!");
} else {
  // console.log("No borders!");
}

// Sarah's usecase

if (language === "English" && population < 50 && !isIsland) {
  // console.log("Sarah can live here!");
} else {
  // console.log("Sarah can't live here");
}
// Switch statement – language
//#region

const newlanguage = "random";

switch (newlanguage) {
  case "chinese":
    // console.log("Most native speakers");
    break;
  case "spanish":
    // console.log("2nd in place");
    break;
  case "english":
    // console.log("3rd most");
    break;
  case "hindi":
    // console.log("4th most");
    break;
  case "arabic":
    // console.log("5th most");
    break;
  default:
  // console.log("all are good as well");
}

//#endregion
