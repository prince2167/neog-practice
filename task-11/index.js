// Create two objects with name, age, and power as Ram, 2500, Treta. Krishna, 2325,
//  Dwapar Write a function which takes two objects and return the person with more power.

const personOne = {
  name: "Ram",
  age: 25,
  power: "2500",
};
const personTwo = {
  name: "Krishna",
  age: 31,
  power: "2350",
};

function calculatePower(personOne, personTwo) {
  if (personOne.power > personTwo.power) {
    console.log(`${personOne.name} is powerful`);
  } else {
    console.log(`${personTwo.name} is powerful`);
  }
}
calculatePower(personOne, personTwo);
