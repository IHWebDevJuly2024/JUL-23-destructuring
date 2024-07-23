// DESTRUCTURING

const names = [
  "John",
  "Jane",
  "Michael",
  "Emily",
  "David",
  "Sarah",
  "Daniel",
  "Olivia",
  "Matthew",
  "Sophia",
];

// const secondName = names[1];

// console.log(secondName);

const [firstName, secondName, thirdName] = names; // it creates new variables with the values of the array

console.log(secondName);

// this doesn't modify the array

console.log(names);

const [, , thirdNameAgain] = names; // now I'm avoiding the first one and the second one

console.log(thirdName);

const cities = ["Toronto", "Vancouver", "Montreal", "Calgary", "Paris"];

// const [, , , , fifthCity ] = cities;
// console.log(fifthCity); // undefined if paris is not there

const [, , , , fifthCity = "Otawa"] = cities; // here we add a default value, if there is no value on the fifth position, it's going to be "Otawa"

console.log(fifthCity); // Paris

const europeanCountries = [
  ["Germany", "German"],
  ["France", "French"],
  ["Spain", "Spanish"],
  ["Italy", "Italian"],
  ["Netherlands", "Dutch"],
  ["Sweden", "Swedish"],
  ["Greece", "Greek"],
  ["Portugal", "Portuguese"],
  ["Poland", "Polish"],
  ["Norway", "Norwegian"],
];

const [[, firstLanguage]] = europeanCountries;

console.log(firstLanguage);

let [a, b = 2, c, d = 1] = [3, 4];
console.log(a, b, c, d); // ==> ???


